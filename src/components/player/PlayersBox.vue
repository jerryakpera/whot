<template>
    <q-card 
        :key="componentKey" 
        dark 
        bordered 
        class="bg-grey-9 playersBox q-pa-xs q-mt-sm"
        :class="checkTurn ? 'turnBorder' : ''"
    >
        <div>
            <div v-if="player">
                {{playerShouts}}
                <q-btn
                    @click="shout('warning')"
                    class="q-mx-sm"
                    size="xs"
                    color="deep-orange"
                    icon="campaign"
                    label="Warning Card"
                />
                <q-btn
                    @click="shout('lastCard')"
                    size="xs"
                    color="light-blue-9"
                    icon="priority_high"
                    label="Last Card"
                />
            </div>
            <q-separator />
            <q-scroll-area
                visible
                style="height: 155px; width: 100%;"
                class="q-mt-sm bg-grey-10 rounded-borders"
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
            >
                <div v-if="player">
                    <whotcard type="whotcard" v-for="card in player.cards" :key="card.id" :card="card" />
                </div>
            </q-scroll-area>
        </div>
    </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data: () => ({
        thumbStyle: {
            right: "4px",
            borderRadius: "5px",
            backgroundColor: "#027be3",
            width: "5px",
            opacity: 0.75
        },
        barStyle: {
            right: "2px",
            borderRadius: "9px",
            backgroundColor: "#027be3",
            width: "9px",
            opacity: 0.2
        },
        componentKey: 0
    }),
    props: {
        player: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapGetters("users", ["whotUser"]),
        ...mapGetters("game", ["whotGame", "currentPlayer", "whotColors", "playerShouts"]),
        index() {
            return this.whotGame.players.findIndex(player => player.name === this.whotUser.username)
        },
        checkTurn() {
            return this.whotGame.players[this.whotGame.currentPlayer].name === this.whotUser.username
        }
    },
    components: {
        whotcard: () => import("../Game/WhotCard")
    },
    methods: {
        ...mapActions("game", ["setShout"]),
        shout(shoutType) {
            if (!this.checkTurn) return
            this.setShout(shoutType)
            this.$root.$emit("refreshGameBoard")
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
.playersBox {
    width: 450px;
}

.turnBorder {
    border: 2px solid yellow;
    transition: all 0.3s ease-in;
}

@media screen and (max-width: 449px) {
    .playersBox {
        width: 100%;
        margin-top: 20px;
    }
}
</style>