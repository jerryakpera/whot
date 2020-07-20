<template>
    <div :key="componentKey" style="display: inline-block" class="q-pa-xs">
        <div
            class="bg-white cardBox q-ma-xs q-pa-xs"
            v-for="card in whotGame.lastPlayedCards" :key="card.id" :card="card"
        >
        <div style="cursor: pointer; width: 100%" class="card">
            <div>
            <div class="no">{{card.no}}</div>
            <div class="shape text-center" :class="card.shape"></div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data: () => ({
        componentKey: 0
    }),
    computed: {
        ...mapGetters("game", ["whotGame", "lastPlayedCards"])
    },
    mounted() {
        this.$root.$on("refreshGameBoard", () => {
            this.componentKey ++
        })
    }
}
</script>

<style lang="scss" scoped>
.playedsCards {
    border: 1px solid white;
    width: 100px;
    height: 40px;
    display: block;
    border-radius: 5px;
    margin-top: 4px;
    margin-left: 4px;
}

.badge {
  width: 20px;
}
.cardBox {
  width: 20px;
  height: 30px;
  display: inline-block;
  border: 1px solid brown;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  .card {
    div {
      .no {
        color: brown;
        font-size: 0.5em;
        font-weight: bold;
        margin-top: -4px;
      }

      .shape {
        margin: 0 auto;
        text-align: center;

        &.square {
          background: brown;
          width: 10px;
          height: 10px;
        }

        &.circle {
          background: brown;
          border-radius: 50%;
          width: 8px;
          height: 8px;
        }

        &.triangle {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 8px solid brown;
        }

        &.cross {
          background: brown;
          height: 8px;
          position: relative;
          width: 4px;
        }

        &.cross:after {
          background: brown;
          content: "";
          height: 4px;
          left: -2px;
          position: absolute;
          top: 1.5px;
          width: 8px;
        }
      }

      .star {
        margin: 2px 1px;
        position: relative;
        display: block;
        color: brown;
        width: 0px;
        height: 0px;
        border-right: 5px solid transparent;
        border-bottom: 4px solid brown;
        border-left: 6px solid transparent;
        transform: rotate(33deg);
      }

      .star:before {
        border-bottom: 4px solid brown;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        position: absolute;
        height: 0;
        width: 0;
        top: -2px;
        left: -4px;
        display: block;
        content: "";
        transform: rotate(-35deg);
      }

      .star:after {
        // background: grey;
        position: absolute;
        display: block;
        color: brown;
        top: 0px;
        left: -6px;
        width: 0px;
        height: 0px;
        border-right: 5px solid transparent;
        border-bottom: 4px solid brown;
        border-left: 6px solid transparent;
        transform: rotate(-70deg);
        content: "";
      }
    }
  }
}

.whot {
  margin: 10px auto;
  font-size: 0.4em;
  text-align: center;
  color: brown;
  // width: 100px;
  // height: 100px;
  // margin-top: 30px;
  font-family: "Berkshire Swash", cursive;
}

.whot:before {
  content: "Whot";
}

.bottom {
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

