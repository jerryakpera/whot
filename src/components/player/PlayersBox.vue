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
                <q-btn @click="chatDialog = true" round color="secondary" icon="textsms" class="q-mx-sm" size="xs" />
                <q-chip size="sm" square>
                    <q-avatar color="primary" text-color="white">
                        {{player.cards.length}}
                    </q-avatar>
                    C A R D S
                </q-chip>
                <q-btn
                    @click="shout('lastCard')"
                    size="xs"
                    :color="!this.checkTurn ? 'blue-9' : 'grey'"
                    icon="campaign"
                    label="Last Card"
                />
                <q-chip v-for="shout in whotGame.shouts" :key="shout.playerID" size="xs" dense square>
                    <q-avatar color="negative" text-color="white">
                        LC
                    </q-avatar>
                    {{shout.playerName}}
                </q-chip>
                <!-- {{whotGame.shouts}} -->
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
        <q-dialog v-model="chatDialog">
            <chatbox @closeDialog="closeChat" />
        </q-dialog>
    </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data: () => ({
        chatDialog: false,
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
        ...mapGetters("game", ["whotGame", "currentPlayer", "whotColors", "gameShouts"]),
        index() {
            return this.whotGame.players.findIndex(player => player.name === this.whotUser.username)
        },
        checkTurn() {
            return this.whotGame.players[this.whotGame.currentPlayer].name === this.whotUser.username
        }
    },
    components: {
        whotcard: () => import("../Game/WhotCard"),
        chatbox: () => import("../Dialogs/Game/ChatDialog")
    },
    methods: {
        ...mapActions("game", ["setShout"]),
        shout(shoutType) {
            if (this.checkTurn) return
            // this.setShout(shoutType)
            this.$root.$emit("lastCard")
        },
        closeChat() {
            this.chatDialog = false
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