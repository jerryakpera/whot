<template>
    <q-card 
        :key="componentKey" 
        style="width: 120px" 
        dark 
        bordered 
        class="bg-grey-9 my-card"
        :class="checkTurn ? 'turnBorder' : ''"
    >
        <q-card-section class="q-pa-none">
            <q-avatar size="sm" :color="colors[index]" text-color="white" class="q-ml-xs">
                {{player.name.substring(0, 1)}}
            </q-avatar>
            <q-chip size="sm" square>
                <q-avatar :color="colors[index]" text-color="white">
                    {{player.cards.length}}
                </q-avatar>
                C A R D S
            </q-chip>
        </q-card-section>


        <q-card-section class="q-pa-xs">
            <whotback />
        </q-card-section>

        <q-card-section class="q-pa-xs">
        </q-card-section>
    </q-card>
</template>

<script>
import {  mapGetters } from "vuex";
export default {
    data: () => ({
        colors: [
            "red",
            "indigo",
            "green",
            "orange",
            "blue-grey",
            "blue"
        ],
        componentKey: 0
    }),
    props: {
        player: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapGetters("users", ["whotUser"]),
        ...mapGetters("game", ["whotGame", "currentPlayer", "whotColors", "playerShouts"]),
        checkTurn() {
            return this.whotGame.players[this.whotGame.currentPlayer].name === this.player.name
        },
        shouts() {
            return this.whotGame.shouts.map(shout => shout.player === this.player.name)
        }
    },
    components: {
        whotback: () => import("../Game/WhotBack")
    },
    mounted() {
        this.$root.$on("refreshGameBoard", () => {
            this.componentKey ++
        })
    }
}
</script>

<style lang="scss" scoped>
.turnBorder {
    transition: all 0.3s ease-in;
    border: 2px solid yellow;
}
</style>