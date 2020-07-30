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

    <q-card-section class="text-center" v-if="loading">
      <loading />
    </q-card-section>

    <q-card-section v-if="!loading" class="q-pa-xs q-ma-xs">
      <div class="text-subtitle2 q-mb-xs">Create a game</div>
      <div class="text-caption q-ml-sm text-secondary">Name of game</div>
      <q-input
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
    <q-card-section v-if="!loading" class="q-pa-xs q-ma-xs">
      <div class="text-caption q-ml-sm text-secondary">No of players</div>
      <q-btn-toggle
        spread
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

    <q-card-section v-if="!loading" class="q-pa-xs q-ma-xs">
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
    <q-card-section v-if="!loading" class="q-pa-xs q-ma-xs">
      <div class="text-caption q-ml-sm text-secondary">Pick two for mistakes?</div>
      <q-btn-toggle
        spread
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
    <q-card-section v-if="!loading" class="q-pa-xs q-ma-xs">
      <div class="text-caption q-ml-sm text-secondary">Game open for anyone to join</div>
      <q-btn-toggle
        spread
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
    <q-card-actions v-if="!loading" align="right">
      <q-btn @click="submitHostGame" unelevated rounded color="secondary" label="Create" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    loading: false,
    whotUserDetails: {},
    game: {
      name: "",
      mistakes: true,
      mode: "hno",
      private: false,
      totalPlayers: 2,
      noOfCards: 4
    }
  }),
  computed: {
    ...mapGetters("users", ["whotUser"])
  },
  components: {
    loading: () => import("../Universal/Loading")
  },
  methods: {
    ...mapActions("users", ["fetchUserDetails", "logout"]),
    submitHostGame() {
      this.$refs.name.validate();

      if (!this.$refs.name.hasError) {
        this.hostNewGame();
      }
    },
    hostNewGame() {
      this.$root.$emit("hostNewGame", this.game);
    },
    fetchProfile() {
      this.loading = true
      
      this.fetchUserDetails()
      .then(whotUser => {
        this.whotUserDetails = whotUser
        this.loading = false
      })
      .catch(() => {
        this.loading = false
        this.logout().then(() => {
          this.$router.push("/");
        });
        // this.$emit("closeDialog")
        // Stop loading & show error
      })
    }
  },
  mounted() {
    this.$refs.name.focus();
    this.fetchProfile()
  }
};
</script>