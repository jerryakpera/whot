<template>
  <div style="display: inline-block" class="q-pa-xs">
    <q-badge
      v-show="position >= 0"
      class="badge"
      style="display: block"
      color="orange"
      text-color="black"
      :label="position + 1"
    />
    <div @click="selectCard" class="bg-white cardBox q-ma-xs q-pa-xs" :class="selectedCards.includes(card.id) ? 'selected' : ''">
      <div style="cursor: pointer; width: 100%" class="card">
        <div>
          <div class="no">{{card.no}}</div>
          <q-badge class="value" text-color="white" :label="card.value" />
          <div class="shape text-center" :class="card.shape"></div>
          <div class="text-right bottom">
            <q-badge class="value value-bottom" text-color="white" :label="card.value" />
            <div class="num text-right">{{card.no}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    selected: []
  }),
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters("game", ["selectedCards"]),
    position() {
      return this.selectedCards.findIndex(id => this.card.id == id);
    }
  },
  methods: {
    ...mapActions("game", ["selectACard", "removeCard"]),
    selectCard() {
      // Check for the card amongst selected cards
      const index = this.selectedCards.findIndex(id => id == this.card.id);

      // If the card is found then unselect the card
      if (index >= 0) {
        this.removeCard(this.card);
        return;
      }

      // IF the card hasnt been selected then add the card to the selected cards
      this.selectACard(this.card);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.badge {
  width: 20px;
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
        background-color: brown;
        font-size: 0.6em;
        font-weight: bold;
        margin: 0;
        position: relative;
        top: -8px;
        text-align: center;

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
      }

      .star:before {
        border-bottom: 25px solid brown;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
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