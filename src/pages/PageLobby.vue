<template>
  <div class="flex flex-center">
      <loading class="q-mt-lg" v-if="loading" />
    <q-card v-if="loading">
    </q-card>
    <q-card class="q-mt-sm q-pa-md my-card" style="width: 350px" v-if="!loading">
      <q-card-section>
        <q-btn-group spread flat rounded>
          <q-btn size="sm" :label="whotUserDetails.played" icon="donut_large" color="secondary" />
          <q-btn size="sm" :label="whotUserDetails.won" icon="emoji_events" color="positive" />
          <q-btn size="sm" :label="whotUserDetails.lost" icon="thumb_down_alt" color="negative" />
        </q-btn-group>
        <q-btn
          @click="hostGameDialog = true"
          class="q-mt-sm"
          icon="games"
          size="sm"
          style="width: 100%"
          unelevated
          rounded
          color="primary"
          label="Create New Game"
        />
      </q-card-section>
      <q-card-section>
        <q-btn
          @click="refreshOpenGames"
          icon="refresh"
          size="sm"
          style="width: 100%"
          unelevated
          rounded
          class="bg-secondary text-white"
          label="Refresh Game List"
        />
        <gamelist class="q-mt-sm" :games="openGames"/>
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <q-btn
          @click="privateGameDialog = true" 
          icon="login"
          size="sm"
          style="width: 100%"
          unelevated
          rounded
          color="green-8" 
          label="Join Private Game" 
        />
      </q-card-section>
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
      <gamewaiting :game="whotGame" :user="whotUser" />
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
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    loading: true,
    gameDialog: false,
    hostGameDialog: false,
    gameWaitingDialog: false,
    privateGameDialog: false,
    whotUserDetails: {}
  }),
  computed: {
    ...mapGetters("game", ["whotGame", "openGames"]),
    ...mapGetters("users", ["whotUser"])
  },
  components: {
    gamelist: () => import("../components/Game/GameList"),
    hostgame: () => import("../components/Game/HostGame"),
    gamewaiting: () => import("../components/Dialogs/Game/GameWaiting"),
    privategame: () => import("../components/Dialogs/Game/PrivateGame"),
    gamedialog: () => import("../components/Dialogs/Game/GameDialog"),
    loading: () => import("../components/Universal/Loading")
  },
  methods: {
    ...mapActions("users", ["fetchUserDetails", "logout"]),
    fetchProfile() {
      this.loading = true
      
      this.fetchUserDetails()
      .then(whotUser => {
        this.whotUserDetails = whotUser
        this.loading = false
      })
      .catch(() => {
        this.loading = false
        this.logout().then(() => {
          this.$router.push("/");
        });
      })
    },
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
  },
  mounted() {
    this.fetchProfile()
  }
};
</script>

<style lang="scss" scoped>
  body {
    // background-color: red;
  }
</style>