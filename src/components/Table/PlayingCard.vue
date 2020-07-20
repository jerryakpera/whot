<template>
    <div style="display: block" :key="componentKey">
      <div @click="playCards" class="playingCard bg-white cardBox q-ma-xs q-pa-xs">
          <div style="cursor: pointer; width: 100%" class="card">
            <div>
              <div class="no">{{whotGame.playingCard.no}}</div>
                <q-badge color="primary value" text-color="white" :label="whotGame.playingCard.value" class="cardValue" />
                <div class="shape text-center" :class="whotGame.playingCard.shape"></div>
                <div class="text-right bottom">
                  <q-badge color="primary value value-bottom" text-color="white" :label="whotGame.playingCard.value" />
                <div class="num text-right">{{whotGame.playingCard.no}}</div>
              </div>
            </div>
          </div>
        <q-dialog persistent v-model="showWhotDialog">
          <whotdialog @closeDialog="showWhotDialog = false" />
        </q-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    showWhotDialog: false,
    componentKey: 0
  }),
  computed: {
    ...mapGetters("game", ["whotGame", "whotSettings", "checkTurn", "selectedCards"]),
    ...mapGetters("users", ["whotUser"])
  },
  methods: {
    playCards() {
      const currentPlayer = this.whotGame.players[this.whotGame.currentPlayer]

      if (this.selectedCards.length === 0) return

      if (currentPlayer.name === this.whotUser.username) {
        if(this.selectedCards.length > 0 && this.whotSettings.sound) {
          this.$root.$emit("playCards")
        }
      }
    }
  },
  components: {
  },
  mounted() {
    this.$root.$on("refreshGameBoard", () => {
      this.componentKey ++
    })
  }
}
</script>

<style lang="scss" scoped>
.playedCardsBox {
  width: 100px;
  height: 30px;
  border: 1px solid white;
  border-radius: 5px;
  margin-top: 14px;
  margin-left: 4px;
}

.cardBox {
  width: 100px;
  height: 138px;
  display: inline-block;
  border: 2px solid brown;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 4px #333;
    border: 2px solid #f39237;
  }

  &.selected {
    border: 2px solid #f39237;
  }

  .card {
    div {
      .no {
        color: brown;
        font-size: 1em;
        font-weight: bold;
      }

      .value {
        font-size: 0.6em;
        font-weight: bold;
        margin: 0;
        position: relative;
        top: -8px;

        &.value-bottom {
          top: 8px;
        }
      }

      .bottom .num {
        position: relative;
        top: 4px;
        padding: 0;
      }

      .shape {
        margin: 0 auto;
        text-align: center;

        &.square {
          background: brown;
          width: 40px;
          height: 40px;
        }

        &.circle {
          background: brown;
          border-radius: 50%;
          width: 45px;
          height: 45px;
        }

        &.triangle {
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 40px solid brown;
        }

        &.cross {
          background: brown;
          height: 38px;
          position: relative;
          width: 20px;
        }

        &.cross:after {
          background: brown;
          content: "";
          height: 20px;
          left: -10px;
          position: absolute;
          top: 9px;
          width: 40px;
        }
      }

      .star {
        margin: 12px 22px;
        position: relative;
        display: block;
        color: brown;
        width: 0px;
        height: 0px;
        border-right: 20px solid transparent;
        border-bottom: 18px solid brown;
        border-left: 25px solid transparent;
        transform: rotate(35deg);
        // background: grey;
      }

      .star:before {
        border-bottom: 25px solid brown;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        position: absolute;
        height: 0;
        width: 0;
        top: -10px;
        left: -18px;
        display: block;
        content: "";
        transform: rotate(-35deg);
      }

      .star:after {
        position: absolute;
        display: block;
        color: brown;
        top: 0px;
        left: -25px;
        width: 0px;
        height: 0px;
        border-right: 25px solid transparent;
        border-bottom: 18px solid brown;
        border-left: 20px solid transparent;
        transform: rotate(-70deg);
        content: "";
      }
    }
  }
}

.whot {
  margin: 22px auto;
  font-size: 2em;
  text-align: center;
  color: brown;
  width: 100px;
  // height: 100px;
  // margin-top: 30px;
  font-family: "Berkshire Swash", cursive;
}

.whot:before {
  // margin-top: 30px;
  content: "Whot";
}

.bottom {
  // text-align: right;
  // padding-top: 20px;

  .num {
    color: brown;
    font-size: 1em;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  .num,
  .value {
    transform: rotate(180deg);
  }
}
</style>