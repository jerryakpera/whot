<template>
    <div :key="componentKey" class="q-pa-sm">
        <q-chip square class="marketNo">
            <q-avatar color="primary" text-color="white">{{whotGame.market.length}}</q-avatar>Market
        </q-chip>
        <div @click="pickMarket" class="market" style="cursor: pointer;" id="market"></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data: () => ({
        componentKey: 0
    }),
    computed: {
        ...mapGetters("game", ["whotGame", "currentPlayer"])
    },
    methods: {
        pickMarket() {
            this.$root.$emit("pickMarket")
        }
    },
    mounted() {
        this.$root.$on("refreshGameBoard", () => {
            this.componentKey ++
        })
    }
}
</script>

<style lang="scss" scoped>
.market {
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color: brown;
  width: 100px;
  height: 138px;
  padding-top: 50px;
  font-family: "Berkshire Swash", cursive;
  border-radius: 5px;
  border: 1px solid white;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 4px #CCC;
  }
}

.market:before {
  content: "Whot";
  display: block;
  margin: 0;
}
</style>