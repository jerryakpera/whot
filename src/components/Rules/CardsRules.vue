<template>
  <div>
    <div class="row">
      <cardinfo class="col-12 col-md-6 q-pa-xs" v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        id: "0",
        no: 1,
        shape: "star",
        value: 2,
        name: "Hold on",
        info:
          "This card is a combination card. It is used to suspend everybody other than the yourself. Must be played on similar shape. Any card can be placed on it. If you cannot cover then go to the market",
        other: "Star cards are worth double points when counting at end of game"
      },
      {
        id: "5",
        no: 2,
        shape: "circle",
        value: 2,
        name: "Pick two",
        info:
          "This card is an action card. It is used to send the next player to the market for 2 cards. Chain for greater multiply the numbers picked.",
        others: "Pick two cannot be blocked or transferred. You must pick."
      },
      {
        id: "18",
        no: 5,
        shape: "triangle",
        value: 5,
        name: "Pick three",
        info:
          "This card is an action card. It is used to send the next player to the market for 3 cards. Chain for greater multiply the numbers picked.",
        other: "Pick three can be transferred"
      },
      {
        id: "30",
        no: 8,
        shape: "star",
        value: 16,
        name: "Suspension",
        info:
          "This card is an action card. It is used to make the next player miss a turn. Chain to suspend multiple following players.",
        other:
          "Use wisely. You can suspend yourself. Star cards are worth double points."
      },
      {
        id: "45",
        no: 14,
        shape: "square",
        value: 14,
        name: "General Market",
        info:
          "This card is an action card. It is used to make all other players go to the market for a single card. Chain for 2x 3x 4x. After general market you have to cover."
      },
      {
        id: "49",
        no: 20,
        shape: "whot",
        value: 20,
        name: "Whot",
        info:
          "This card is an action card. Play it and request the shape you want. Chaining it does nothing. Only the requested shape or another Whot can cover it.",
        other: "Worth 20 points when counting"
      }
    ]
  }),
  props: {},
  components: {
    cardinfo: () => import("./CardInfo")
  }
};
</script>