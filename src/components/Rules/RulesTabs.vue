<template>
  <div>
    <q-tabs dense v-model="tab" align="left" class="bg-primary text-white shadow-2" :breakpoint="0">
      <q-tab name="howtoplay" icon="gamepad" label="How to play" />
      <q-tab name="howtowin" icon="emoji_events" label="How to win" />
      <q-tab name="cards" icon="view_carousel" label="Cards" />
    </q-tabs>
    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="howtoplay" class="bg-primary">
        <div class="text-h4 q-mb-md">How to play</div>
        <howtoplay />
      </q-tab-panel>
      <q-tab-panel name="howtowin" class="bg-primary">
        <div class="text-h4 q-mb-md">How to win</div>
        <howtowin />
      </q-tab-panel>
      <q-tab-panel name="cards" class="bg-primary">
        <div class="text-h4 q-mb-md">Action Cards</div>
        <div
          class="text-body1 q-mb-md"
        >All other cards not mentioned in this list are considered normal playing cards and are used to continue the game.</div>
        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          style="height: 500px;"
        >
          <cardsrules />
        </q-scroll-area>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "howtoplay",
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      }
    };
  },
  components: {
    cardsrules: () => import("./CardsRules"),
    howtoplay: () => import("./HowToPlay"),
    howtowin: () => import("./HowToWin")
  }
};
</script>