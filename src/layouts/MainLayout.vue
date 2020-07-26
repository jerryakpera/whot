<template>
  <q-layout  class="bg-secondary" view="lHh Lpr lFf">
    <q-header elevated>
      <q-bar>
          <q-btn to="/" size="xs" icon="home" outline rounded color="secondary" label="Whot!" />
          <q-space />
          <audio id="audio" src="../../public/sounds/notif1.mp3"></audio>
          <q-btn
            @click="showRulesDialog = true"
            to="/"
            size="sm"
            icon="gavel"
            outline
            rounded
            color="secondary"
            label="Rules!"
            class="q-mr-sm"
          />
          <q-btn
            :color="isLoggedIn ? 'secondary' : 'grey'"
            round
            icon="person"
            size="sm"
            class="q-ml-md"
            unelevated
          >
            <!-- <q-menu v-if="!isLoggedIn" fit>
              <q-list style="min-width: 155px">
                <q-item @click="loginDialog = true" clickable>
                  <q-item-section>Sign in</q-item-section>
                </q-item>
                <q-item @click="registerDialog = true" clickable>
                  <q-item-section>Register</q-item-section>
                </q-item>
              </q-list>
            </q-menu> -->
            <q-menu v-if="isLoggedIn" fit>
              <q-list style="min-width: 155px">
                <q-item dense @click="profileDialog = true" clickable>
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item @click="logUserOut" clickable>
                  <q-item-section>Log out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-bar>
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
    <q-dialog
      v-model="whotDialog"
    >
      <whotdialog @closeDialog="whotDialog = false"/>
    </q-dialog>
  </q-layout>
</template>

<script>
import io from "socket.io-client";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MainLayout",
  data: () => ({
    whotDialog: false,
    profileDialog: false,
    showRulesDialog: false,
    loginDialog: false,
    registerDialog: false,
    socket: {}
  }),
  computed: {
    ...mapGetters("users", ["isLoggedIn", "whotUser"]),
    ...mapGetters("game", ["whotGame", "currentPlayer", "selectedCards", "whotSettings"])
  },
  components: {
    profiledialog: () => import("../components/Dialogs/Profile/ProfileDialog"),
    rulesdialog: () => import("../components/Rules/Rules"),
    logindialog: () => import("../components/Dialogs/Auth/LoginDialog"),
    whotdialog: () => import("../components/Dialogs/Game/WhotDialog"),
    registerdialog: () => import("../components/Dialogs/Auth/RegisterDialog")
  },
  methods: {
    ...mapActions("users", ["checkUserLogin", "logout"]),
    ...mapActions("game", ["updateGame", "updateGamesList", "setWhotShape", "updateShout"]),
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
    },
    checkTurn() {
      return this.whotGame.players[this.whotGame.currentPlayer].name === this.whotUser.username
    },
    showNotif (message) {
      this.$q.notify({
        message: message,
        color: 'dark',
        timeout: 1500
      })
    },
    showMsgNotif (message) {
      this.$q.notify({
        player: message.player,
        caption: message.message,
        color: 'primary'
      })
    }
  },
  mounted() {
    this.socket.on("disconnect", () => {
      console.log("Client disconnecting")
    })

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
        this.$root.$emit("startGame")
      })
    })

    // Player leaves game
    this.$root.$on("leaveGame", () => {
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

      if (game.players.length === 1) {
        this.$root.$emit("closeGameDialog")
      }
      this.updateGame(game)
      this.$root.$emit("refreshWaitingGame")
    })

    this.socket.on("gameContinue", game => {
      var audio = document.getElementById("audio");
      this.updateGame(game)
      .then(() => {
        // if (this.whotSettings.sound) audio.play();
        this.$root.$emit("refreshGameBoard")
        // this.showNotif(game.lastMove)
      })
    })

    this.socket.on("gameOver", game => {
      this.$root.$emit("gameOver")
    })

    this.socket.on("selectShape", game => {
      this.updateGame(game)
      .then(() => {
        this.$root.$emit("refreshGameBoard")
        this.whotDialog = true
      })
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

    this.$root.$on("pickMarket", () => {
      const itsMyTurn = this.checkTurn()

      if (!itsMyTurn) return
      this.socket.emit("pickMarket", this.whotGame)
    })

    this.$root.$on("playCards", () => {
      if (!this.checkTurn()) return

      const data = {
        game: this.whotGame,
        selectedCards: this.selectedCards
      }

      this.socket.emit("playCards", data)
    })

    this.$root.$on("refreshGame", () => {
        this.$root.$emit("refreshGameBoard")
    })

    this.$root.$on("shapeSelected", shape => {
      this.setWhotShape(shape)
      .then(() => {
        this.socket.emit("shapeSelected", this.whotGame)
      })
    })

    this.$root.$on("sendMessage", message => {
      const newMessage = {
        player: this.whotUser.username,
        message
      }
      this.socket.emit("sendMessage", newMessage)
    })

    this.socket.on("receiveMsg", message => {
      const showMessage = `${message.player}: ${message.message}`
      this.showNotif(showMessage)
    })

    this.socket.on("broadcastShout", gameShout => {
      this.showNotif(`${gameShout.playerName} LAST CARD`)
    })

    this.socket.on("updateShouts", gameShout => {
      this.updateShout(gameShout)
      .then(() => {
        this.$root.$emit("refreshGameBoard")
      })
    })

    this.$root.$on("lastCard", () => {
      const shout = {
        gameShouts: this.whotGame.shouts,
        playerName: this.currentPlayer.name,
        playerID: this.currentPlayer.id,
      }
      this.socket.emit("shoutLastCard", shout)
    })
  },
  created() {
    this.checkUserLogin().then(() => {});
    this.socket = io("https://whotserver.herokuapp.com");
    // this.socket = io("http://localhost:3002/");
  }
};
</script>

<style lang="scss" scoped>
  .mainBody {
    background-color: red;
    border: 1px solid red;
  }
</style>