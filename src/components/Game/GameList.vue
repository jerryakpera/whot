<template>
  <q-list bordered v-if="games.length > 0">
    <div v-if="loading" class="flex flex-center">
      <!-- <loading /> -->
    </div>
    <div>
      <q-scroll-area
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height: 200px; max-width: 300px;"
      >
        <q-item @click="joinGame(game)" v-for="game in games" :key="game.id" clickable v-ripple>
          <q-item-section>
            <q-item-label>{{game.name}}</q-item-label>
            <q-item-label>
              <q-rating
                :max="game.totalPlayers"
                :value="game.activePlayers"
                size="1em"
                color="secondary"
                icon="face"
              />
            </q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-icon v-if="game.mistakes" color="negative" name="priority_high" />
          </q-item-section>
        </q-item>
      </q-scroll-area>
    </div>
  </q-list>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    loading: false,
    whotUserDetails: {},
    thumbStyle: {
      right: "4px",
      borderRadius: "5px",
      backgroundColor: "#307351",
      width: "5px",
      opacity: 0.75
    },
    barStyle: {
      right: "2px",
      borderRadius: "9px",
      backgroundColor: "#307351",
      width: "9px",
      opacity: 0.2
    }
  }),
  props: {
    games: {
      type: Array,
      required: true
    }
  },
  components: {
    loading: () => import("../Universal/Loading")
  },
  methods: {
    ...mapActions("users", ["fetchUserDetails", "logout"]),
    joinGame(game) {
      this.loading = true
      if (game.activePlayers === game.totalPlayers) {
        this.$root.$emit("showBasicNotification", "This game is already full.")
        return
      }
      this.fetchProfile()
      .then(whotUser => {
        const data = {
          whotUser,
          gameID: game.id
        }
        this.$root.$emit("joinGame", data)
      })
    },
    fetchProfile() {
      this.loading = true
      return new Promise((resolve, reject) => {
        this.fetchUserDetails()
        .then(whotUser => {
          this.loading = false
          resolve(whotUser)
        })
        .catch(() => {
          this.loading = false
          this.logout().then(() => {
            this.$router.push("/");
          });
        })
      })
    }
  },
  mounted() {
    
  }
};
</script>