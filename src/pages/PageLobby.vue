<template>
  <div class="flex flex-center">
    <q-card class="q-mt-sm q-pa-md my-card" style="width: 350px">
      <q-card-section class="bg-white q-pa-xs">
        <q-btn
          @click="hostGameDialog = true"
          icon="games"
          unelevated
          rounded
          color="primary"
          label="Host Game"
        />
      </q-card-section>

      <q-card-section>
        <q-btn
          icon="refresh"
          round
          class="bg-secondary text-white"
          size="sm"
          unelevated
          @click="refreshOpenGames"
        />
        <div class="text-h5 q-mt-sm q-mb-xs">Open Games</div>
      </q-card-section>

      <q-card-section>
        <gamelist :games="openGames"/>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <!-- Opens dialog and requests for gameID -->
        <q-btn @click="privateGameDialog = true" color="primary" label="Join Private Game" />
      </q-card-actions>
    </q-card>
    <q-dialog
      v-model="hostGameDialog"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <hostgame />
    </q-dialog>
    <q-dialog persistent v-model="gameWaitingDialog">
      <gamewaiting :game="whotGame" />
    </q-dialog>
    <q-dialog persistent v-model="privateGameDialog">
      <privategame />
    </q-dialog>
    <q-dialog
      v-model="gameDialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <gamedialog @closeDialog="close" />
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    gameDialog: false,
    hostGameDialog: false,
    gameWaitingDialog: false,
    privateGameDialog: false,
  }),
  computed: {
    ...mapGetters("game", ["whotGame", "openGames"])
  },
  components: {
    gamelist: () => import("../components/Game/GameList"),
    hostgame: () => import("../components/Game/HostGame"),
    gamewaiting: () => import("../components/Dialogs/Game/GameWaiting"),
    privategame: () => import("../components/Dialogs/Game/PrivateGame"),
    gamedialog: () => import("../components/Dialogs/Game/GameDialog"),
  },
  methods: {
    refreshOpenGames() {
      this.$root.$emit("fetchOpenGames")
    },
    close() {
      this.gameDialog = false
    }
  },
  created() {
    this.$root.$on("showGameWaitingDialog", () => {
      this.hostGameDialog = false;
      this.gameWaitingDialog = true;
    });

    this.$root.$on("closeGameWaitingDialog", () => {
      this.gameWaitingDialog = false;
    });

    this.$root.$on("startGame", () => {
      this.gameDialog = true
      // this.gameWaitingDialog = false
    })

    this.$root.$on("closeGameDialog", () => {
      this.gameDialog = false
    })
  }
};
</script>

<style lang="scss" scoped>
  body {
    // background-color: red;
  }
</style>