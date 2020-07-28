<template>
  <q-card :key="componentKey" style="width: 250px;">
    <q-card-section class="bg-primary text-white q-mb-none">
      <div class="text-h6">{{game.game.name}}</div>
      <q-icon size="xs" color="white" name="score" /> {{game.game.stake}}
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
            :color="game.players[i] ? 'positive' : 'grey'"
          />
          <div v-if="game.players[i]" class="text-subtitle2 text-positive">
            {{ game.players[i].name }}
            <br />
            <span :class="game.players[i].points > 750 ? 'green-10' : game.players[i].points > 500 ? 'blue-5' : 'red-10'">
              {{ game.players[i].points }}
            </span>
          </div>
          <div v-else class="text-subtitle2 text-black">
            Player {{ i + 1 }}
          </div>
        </div>
        <div v-if="game.players[i]" class="col-6">
          <q-chip dense size="md" square>
            <q-avatar color="red" text-color="white">
              <span class="text-caption" style="font-size: 0.7em">
                {{game.players[i].points}}
              </span>
            </q-avatar>
            <span class="text-caption">
              Points
            </span>
          </q-chip>
          <q-chip dense size="md" square>
            <q-avatar color="red" text-color="white">
              {{game.players[i].won}}
            </q-avatar>
            <span class="text-caption">
              Won
            </span>
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