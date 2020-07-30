<template>
  <q-card>
    <q-card-section v-if="countingCards">
      <div class="text-center text-h6">
        COUNTING CARDS
      </div>
    </q-card-section>
    <q-card-section v-if="countingCards">
      <div class="flex flex-center">
        <q-spinner-cube
          color="blue-10"
          size="sm"
        />
      </div>
    </q-card-section>
    <q-card-section v-if="!countingCards" class="row items-center">
      <!-- <q-avatar icon="signal_wifi_off" color="primary" text-color="white" /> -->
      <span class="q-ml-sm">Game Over</span>
    </q-card-section>

    <q-card-section v-if="!countingCards">
        <q-card v-for="player in gameScores.players" :key="player.id" dark bordered class="bg-grey-9 my-card q-pa-xs q-mb-sm">
          <q-card-section>
            <div class="text-subtitle text-white q-ma-none"> <q-icon size="sm" v-if="player.winner" name="emoji_events" color="secondary" /> {{player.name}}   </div>
            <q-btn-group flat>
              <q-btn size="sm" glossy color="secondary" label="Card Total" icon="score" />
              <q-btn size="sm" outline color="secondary" :label="player.cardsTotal" />
            </q-btn-group>
          </q-card-section>
        </q-card>
    </q-card-section>

    <q-card-actions v-if="!countingCards" align="right">
      <q-btn flat label="Rematch" color="primary" v-close-popup />
      <q-btn flat label="End Game" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data: () => ({
    countingCards: true
  }),
  props: {
    gameScores: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters("game", ["whotGame"])
  },
  methods: {
    countCards() {
      setTimeout(() => {
        this.countingCards = false
      }, 3000)
    }
  },
  mounted() {
    this.countCards()
  }
}
</script>