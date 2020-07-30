<template>
  <q-card class="bg-primary text-white">
    <q-bar>
      <div class="text-subtitle2 text-weight-bold">Rank</div>
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>
    <q-card-section>
      <div class="text-h3">Ranking</div>
    </q-card-section>
    <q-card-section>
      <div v-if="loading" class="flex flex-center">
        <loading color="white" />
      </div>
      <ranktable v-if="!loading" />
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    loading: true,
    tab: "cards",
    splitterModel: 20
  }),
  computed: {
    ...mapGetters("game", ["cards"])
  },
  components: {
    ranktable: () => import("./RankTable"),
    loading: () => import("../Universal/Loading"),
  },
  methods: {
    fetchRankList() {
      // this.loading = true
    }
  },
  mounted() {
    this.fetchRankList()
  }
};
</script>