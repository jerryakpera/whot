<template>
  <q-card :key="componentKey" style="width: 250px;">
    <q-card-section class="bg-primary text-white q-mb-none">
      <div class="text-h6">{{game.game.name}}</div>
      <div v-if="!game.game.private" class="text-caption">(waiting)</div>
      <div v-else>
        <div class="text-body1"> {{game.game.id}} </div>
        <div class="text-caption text-weight-bold text-secondary"> (Share gameID) </div>
      </div>
    </q-card-section>
    <q-linear-progress size="10px" indeterminate color="warning" class="q-mt-none" />

    <q-card-section
      v-for="(player, i) in game.totalPlayers"
      :key="player.id"
      class="q-pa-md"
    >
      <div class="row">
        <div class="col-6">
          <q-icon
            name="how_to_reg"
            style="font-size: 3em;" 
            :color="game.players[i] ? 'primary' : 'grey'"
          />
          <div v-if="game.players[i]" class="text-h6 text-primary">
            {{ game.players[i] ? game.players[i].name : 'Player ' + i }}
          </div>
          <div v-else class="text-subtitle2 text-black">
            Player {{ i }}
          </div>
        </div>
        <div v-if="game.players[i]" class="col-6">
          <q-chip size="sm" square>
            <q-avatar color="red" text-color="white">
              {{game.players[i].played}}
            </q-avatar>
            Played
          </q-chip>
          <q-chip size="sm" square>
            <q-avatar color="red" text-color="white">
              {{game.players[i].won}}
            </q-avatar>
            Won
          </q-chip>
          <q-chip size="sm" square>
            <q-avatar color="red" text-color="white">
              {{game.players[i].lost}}
            </q-avatar>
            Lost
          </q-chip>
        </div>
      </div>
      <q-separator />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn 
        @click="leaveGame" 
        size="sm" 
        color="negative" 
        icon-right="exit_to_app" 
        label="Leave" 
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data: () => ({
    componentKey: 0
  }),
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  methods: {
    leaveGame() {
      this.$root.$emit("leaveGame")
    }
  },
  mounted() {
    this.$root.$on("refreshWaitingGame", () => {
      this.componentKey++
    })
  }
};
</script>