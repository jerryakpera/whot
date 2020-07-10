<template>
  <q-card class="bg-primary text-white">
    <q-bar>
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>
    <q-card-section>
      <div class="text-h3">Rules</div>
    </q-card-section>
    <q-card-section>
      <rulestabs />
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    tab: "cards",
    splitterModel: 20
  }),
  computed: {
    ...mapGetters("game", ["cards"])
  },
  components: {
    whotcard: () => import("../Game/WhotCard"),
    rulestabs: () => import("./RulesTabs")
  }
};
</script>