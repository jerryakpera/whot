<template>
  <div>
    <q-banner
      v-for="rule in rules"
      :key="rule"
      inline-actions
      rounded
      class="q-my-xs bg-white text-primary"
      :class="page === 'onboarding' ? 'q-px-md' : ''"
      dense
    >{{rule}}</q-banner>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      "Finish all the cards in your hand. Must shout warning or last card on the turn before intend to finish.",
      "To successfully finish it must not be your turn after all your cards have been played",
      "You can also win by having the lowest tally of points when the market runs out",
      "In a highest number out game, the player with the highest points when the game is finished is out. The remaining players continue playing until a winner is left"
    ]
  }),
  props: {
    page: {
      type: String
    }
  },
  components: {}
};
</script>