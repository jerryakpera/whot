<template>
  <q-list bordered v-if="games.length > 0">
    <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 200px; max-width: 300px;"
    >
      <q-item @click="joinGame(game.id)" v-for="game in games" :key="game.id" clickable v-ripple>
        <q-item-section>
          <q-item-label>{{game.name}}</q-item-label>
          <q-item-label>
            <q-rating
              :max="game.totalPlayers"
              :value="game.activePlayers"
              size="1.5em"
              color="primary"
              icon="face"
            />
          </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-icon v-if="game.mistakes" color="white" name="priority_high" />
        </q-item-section>
      </q-item>
    </q-scroll-area>
  </q-list>
</template>
<script>
export default {
  data: () => ({
    thumbStyle: {
      right: "4px",
      borderRadius: "5px",
      backgroundColor: "#307351",
      width: "5px",
      opacity: 0.75
    },
    barStyle: {
      right: "2px",
      borderRadius: "9px",
      backgroundColor: "#307351",
      width: "9px",
      opacity: 0.2
    }
  }),
  props: {
    games: {
      type: Array,
      required: true
    }
  },
  methods: {
    joinGame(gameID) {
      this.$root.$emit("joinGame", gameID)
    }
  },
  mounted() {
    
  }
};
</script>