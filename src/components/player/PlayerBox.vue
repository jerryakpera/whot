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
            <q-avatar size="sm" :color="colors[index]" text-color="white">
                {{player.name.substring(0, 1)}}
            </q-avatar>
            <!-- {{whotGame.shouts}} -->
            <q-btn
                v-if="shouts.length > 0"
                round 
                :color="shouts[0].type === 'warning' ? 'deep-orange' : 'blue'"
                :icon="shouts[0].type === 'warning' ? 'campaign' : 'priority_high'" 
                unelevated
                size="sm"
                class="q-ml-sm"    
            />
            <!-- <q-chip
                v-if="player.shouts.length > 0"
                size="sm" 
                color="deep-orange" text-color="white" 
                icon="campaign"
            >
                Last Card
            </q-chip> -->
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