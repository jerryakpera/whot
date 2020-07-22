<template>
  <div>
    <p :class="page === 'onboarding' ? 'q-px-md' : ''" v-for="rule in rules" :key="rule">{{rule}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      "Click on any card to select it and on the face-up playing card to play it.",
      "A combination of similar number cards can be played",
      "A yellow border around the player box indicates the players turn",
      "Players then play cards face up one by one on the playing card, if they have a card that fits",
      "Possible plays: ",
      "any card with the same shape as the previous play, any card with the same number as the previous play, any Whot card",
      "When a Whot card is played, the player requests a shape. Only this shape or another Whot can cover this card",
      "Note: star cards are worth double points. Points are used only for scoring at the end of a game",
      "If you cannot or do not wish to play, pick from the market. Which are the face down cards on the table"
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