<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Welcome to Whot! Game</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" label="Skip" flat icon-right="skip_next" @click="goToHome"/>
          </div>
        </div>
      </q-card-section>
      <cardonboarding v-if="phase === 0" />
      <howtoplay v-if="phase === 1" page="onboarding"/>
      <howtowin v-if="phase === 2" page="onboarding"/>
      <q-card-actions align="right">
        <q-btn v-if="phase > 0" color="red-10" class="q-mr-sm" dense label="Back" icon="arrow_back" @click="changePhase('prev')"/>
        <q-btn v-if="phase < 2" color="green-7" class="q-mr-sm" dense label="Next" icon-right="arrow_forward" @click="changePhase('next')"/>
        <q-btn v-if="phase === 2" color="green-7" class="q-mr-sm" dense label="Start Playing" icon-right="play_arrow" @click="goToHome"/>
      </q-card-actions>

    </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    phase: 0
  }),
  components: {
    cardonboarding: () => import("../components/Onboarding/CardOnboarding"),
    howtoplay: () => import("../components/Rules/HowToPlay"),
    howtowin: () => import("../components/Rules/HowToWin"),
  },
  methods: {
    goToHome() {
      this.$router.push("/lobby")
    },
    changePhase(direction) {
      if (direction === 'next') this.phase ++
      if (direction === 'prev' && this.phase > 0) this.phase --
    }
  }
};
</script>