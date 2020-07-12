<template>
  <div>
    <div class="cardInfo row">
      <div class="cardName col-12 col-md-3 q-pa-xs">
        <whotcard :card="card" />
      </div>
      <div class="cardName col-12 col-md-9 q-pa-xs">
        <div class="text-h5 q-mt-sm">
          {{card.name}}
          <span class="text-caption text-yellow">({{card.value}} points)</span>
        </div>
        <div class="text-body1">{{card.info}}</div>
        <q-separator v-if="card.other" class="bg-white q-my-sm" />
        <div v-if="card.other" class="text-body1 text-yellow text-weight-medium">* {{card.other}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  components: {
    whotcard: () => import("../Game/WhotCardRules")
  }
};
</script>

<style lang="scss" scoped>
.cardInfo {
  border: 1px solid #24563d;
  border-radius: 5px;
}
</style>