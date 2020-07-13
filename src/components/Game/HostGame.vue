<template>
  <q-card class="bg-primary text-white">
    <q-bar>
      <q-icon name="games" />
      <div class="text-subtitle2">Host Game</div>

      <q-space />

      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>

    <q-card-section>
      <div class="text-h6">Create a game</div>
    </q-card-section>
    <q-card-section class="q-pa-xs q-ma-xs">
      <div class="text-caption q-ml-sm text-secondary">Name of game</div>
      <q-input
        class="q-ma-xs q-mb-none text-white"
        bg-color="white"
        filled
        v-model="game.name"
        placeholder="name"
        dense
        ref="name"
        :rules="[val => !!val || 'required']"
        lazy-rules
        @keyup.enter="submitHostGame"
      />
    </q-card-section>

    <q-card-section class="q-pa-xs q-ma-xs">
      <div class="text-caption q-ml-sm text-secondary">No of players</div>
      <q-btn-toggle
        v-model="game.totalPlayers"
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="secondary"
        color="white"
        text-color="primary"
        :options="[
          {label: '2', value: 2},
          {label: '3', value: 3},
          {label: '4', value: 4}
        ]"
      />
    </q-card-section>

    <q-card-section class="q-pa-xs q-ma-xs">
      <div class="text-caption q-ml-sm text-secondary">How many cards each</div>
      <q-btn-toggle
        v-model="game.noOfCards"
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="secondary"
        color="white"
        text-color="primary"
        :options="[
          {label: '3', value: 3},
          {label: '4', value: 4},
          {label: '5', value: 5},
          {label: '6', value: 6},
          {label: '7', value: 7}
        ]"
      />
    </q-card-section>
    <q-card-section class="q-pa-xs q-ma-xs">
      <div class="text-caption q-ml-sm text-secondary">Pick two for mistakes?</div>
      <q-btn-toggle
        v-model="game.mistakes"
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="secondary"
        color="white"
        text-color="primary"
        :options="[
          {label: 'Mistakes On', value: true},
          {label: 'Mistakes Off', value: false}
        ]"
      />
    </q-card-section>
    <q-card-section class="q-pa-xs q-ma-xs">
      <div class="text-caption q-ml-sm text-secondary">Winner or highest number out</div>
      <q-btn-toggle
        v-model="game.mode"
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="secondary"
        color="white"
        text-color="primary"
        :options="[
          {label: 'Normal', value: 'normal'},
          {label: 'Tournament', value: 'tournament'}
        ]"
      />
    </q-card-section>
    <q-card-section class="q-pa-xs q-ma-xs">
      <div class="text-caption q-ml-sm text-secondary">Game open for anyone to join</div>
      <q-btn-toggle
        v-model="game.private"
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="secondary"
        color="white"
        text-color="primary"
        :options="[
          {label: 'Open', value: false},
          {label: 'Closed', value: true}
        ]"
      />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn @click="submitHostGame" unelevated rounded color="secondary" label="Create" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data: () => ({
    game: {
      name: "",
      mistakes: true,
      mode: "normal",
      private: false,
      totalPlayers: 2,
      noOfCards: 4,
    }
  }),
  methods: {
    submitHostGame() {
      this.$refs.name.validate();

      if (!this.$refs.name.hasError) {
        this.hostNewGame();
      }
    },
    hostNewGame() {
      this.$root.$emit("hostNewGame", this.game);
    }
  },
  mounted() {
    this.$refs.name.focus();
  }
};
</script>