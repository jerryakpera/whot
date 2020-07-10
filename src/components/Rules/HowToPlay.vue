<template>
  <div>
    <p v-for="rule in rules" :key="rule">{{rule}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      "The player to dealer's left begins by playing cards from their hand face up on the playing card",
      "Players then play cards face up one by one on the playing card, if they have a card that fits",
      "Possible plays: ",
      "any card with the same shape as the previous play, any card with the same number as the previous play, any Whot card",
      "When a Whot card is played, the player requests a shape. Only this shape or another Whot can cover this card",
      "Note: star cards are worth double points. Points are used only for scoring at the end of a game",
      "If you cannot or do not wish to play, pick from the market. Which are the face down cards on the table"
    ]
  }),
  props: {},
  components: {}
};
</script>