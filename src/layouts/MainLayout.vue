<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn to="/" size="sm" icon="home" outline rounded color="secondary" label="Whot!" />
        </q-toolbar-title>
        <q-btn
          @click="showRulesDialog = true"
          to="/"
          size="sm"
          icon="gavel"
          outline
          rounded
          color="accent"
          label="Rules!"
        />
        <q-btn
          :color="isLoggedIn ? 'accent' : 'grey'"
          round
          icon="person"
          size="sm"
          class="q-ml-md"
          unelevated
        >
          <q-menu v-if="!isLoggedIn" fit>
            <q-list style="min-width: 155px">
              <q-item @click="loginDialog = true" clickable>
                <q-item-section>Sign in</q-item-section>
              </q-item>
              <q-item @click="registerDialog = true" clickable>
                <q-item-section>Register</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
          <q-menu v-if="isLoggedIn" fit>
            <q-list style="min-width: 155px">
              <q-item @click="profileDialog = true" clickable>
                <q-item-section>Profile</q-item-section>
              </q-item>
              <q-item @click="logUserOut" clickable>
                <q-item-section>Log out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog
      v-model="showRulesDialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <rulesdialog />
    </q-dialog>
    <q-dialog v-model="profileDialog">
      <profiledialog @closeDialog="closeProfile" />
    </q-dialog>
    <q-dialog v-model="loginDialog">
      <logindialog @closeDialog="closeLogin" />
    </q-dialog>
    <q-dialog v-model="registerDialog">
      <registerdialog @closeDialog="closeRegister" />
    </q-dialog>
  </q-layout>
</template>

<script>
import io from "socket.io-client";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MainLayout",
  data: () => ({
    profileDialog: false,
    showRulesDialog: false,
    loginDialog: false,
    registerDialog: false,
    socket: {}
  }),
  computed: {
    ...mapGetters("users", ["isLoggedIn", "whotUser"]),
    ...mapGetters("game", ["whotGame"])
  },
  components: {
    profiledialog: () => import("../components/Dialogs/Profile/ProfileDialog"),
    rulesdialog: () => import("../components/Rules/Rules"),
    logindialog: () => import("../components/Dialogs/Auth/LoginDialog"),
    registerdialog: () => import("../components/Dialogs/Auth/RegisterDialog")
  },
  methods: {
    ...mapActions("users", ["checkUserLogin", "logout"]),
    ...mapActions("game", ["updateGame", "updateGamesList"]),
    closeProfile() {
      this.profileDialog = false;
    },
    closeRegister() {
      this.registerDialog = false;
    },
    closeLogin() {
      this.registerDialog = false;
    },
    logUserOut() {
      this.logout().then(() => {
        this.$router.push("/");
      });
    }
  },
  mounted() {
    // Fetch open games
    this.$root.$on("fetchOpenGames", () => {
      this.socket.emit("fetchOpenGames")
    })

    // Get open games
    this.socket.on("openGames", games => {
      this.updateGamesList(games)
    })

    // When user hosts a new game
    this.$root.$on("hostNewGame", game => {
      const player = {
        id: this.whotUser.userID,
        name: this.whotUser.username,
        played: this.whotUser.played,
        won: this.whotUser.won,
        lost: this.whotUser.lost
      };

      const newGame = {
        player,
        game
      };
      this.socket.emit("hostNewGame", newGame);
    });

    // Users new game is returned
    this.socket.on("gameHosted", game => {
      // Get game back
      // Set game in app store
      this.updateGame(game).then(() => {
        // Open dialog and show game waiting
        this.$root.$emit("showGameWaitingDialog");
      });
      // If game is private show game ID
      // If game is public just show game waiting
    });

    // Join a game
    this.$root.$on("joinGame", gameID => {
      const player = {
        id: this.whotUser.userID,
        name: this.whotUser.username,
        played: this.whotUser.played,
        won: this.whotUser.won,
        lost: this.whotUser.lost
      };

      const data = {
        player,
        gameID
      }

      this.socket.emit("joinGame", data)
    })

    // Player joined game
    this.socket.on("playerJoined", game => {
      this.updateGame(game).then(() => {
        // Open dialog and show game waiting
        this.$root.$emit("showGameWaitingDialog");
      });
    })

    // New player joined game
    this.socket.on("newPlayerJoined", game => {
      this.updateGame(game)
      .then(() => {
        this.$root.$emit("refreshWaitingGame")
      })
    })

    // All players have joined and game is about to start
    this.socket.on("gameStarting", game => {
      this.updateGame(game)
      .then(() => {
        // this.$root.$emit("start")
        alert("Game Starting")
      })
    })

    // Player leaves game
    this.$root.$on("leaveGame", () => {
      // console.log(this.whotGame)
      const data = {
        gameID: this.whotGame.game.id,
        playerID: this.whotUser.userID
      }
      
      this.socket.emit("leaveGame", data)
    })

    this.socket.on("gameClosed", games => {
      this.$root.$emit("closeGameWaitingDialog")
      this.$root.$emit("refreshWaitingGame")
      this.updateGamesList(games)
    })

    this.socket.on("playerLeft", game => {
      if (!game) {
        this.$root.$emit("closeGameWaitingDialog")
        return 
      }
      this.updateGame(game)
      this.$root.$emit("refreshWaitingGame")
    })

    // Join a private game
    this.$root.$on("joinPrivateGame", gameID => {
      const player = {
        id: this.whotUser.userID,
        name: this.whotUser.username,
        played: this.whotUser.played,
        won: this.whotUser.won,
        lost: this.whotUser.lost
      };

      const data = {
        player,
        gameID
      }

      this.socket.emit("joinGame", data)
    })
  },
  created() {
    this.checkUserLogin().then(() => {});
    this.socket = io("https://whotserver.herokuapp.com");
    // this.socket = io("http://localhost:3002/");
  }
};
</script>