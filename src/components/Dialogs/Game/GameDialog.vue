<template>
    <q-card class="bg-primary text-white">
        <q-bar>
            <div class="text-subtitle2 text-weight-bold">
                {{whotGame.game.name}}
            </div>
            <q-space />
            <q-dialog v-model="gameScoresDialog">
                <gamescores :scoreCard="whotGame.scoreCard" />
            </q-dialog>
            <q-btn 
                @click="gameScoresDialog = true" 
                dense
                round
                color="secondary" 
                icon="emoji_events"
            />
            <q-btn 
                @click="changeSound" 
                dense
                round
                :color="whotSettings.sound ? 'positive' : 'dark'" 
                :icon="whotSettings.sound ? 'volume_up' : 'volume_off'"
            />
            <q-btn 
                @click="leaveGame" 
                dense 
                unelevated
                rounded
                color="negative q-px-md" 
                icon="close"
                label="Leave Game"
            >
                <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
        </q-bar>

        <q-card-section horizontal>
            <q-scroll-area
                horizontal
                style="height: 200px; width: 100%;"
                class="bg-grey-10 rounded-borders"
            >
                <div class="row q-pa-sm no-wrap">
                    <div 
                        v-for="(player, i) in whotGame.players" 
                        class="q-mr-sm" 
                        :key="player.id"
                    >
                        <playerbox
                            v-if="whotUser.username != player.name"
                            :player="player" :index="i" 
                        />
                    </div>
                </div>
            </q-scroll-area>
        </q-card-section>

        <q-card-section class="q-pa-sm">
            <div class="row">
                <q-banner :key="componentKey" inline-actions class="q-pa-xs text-dark bg-white lastMove" style="width: 230px">
                    {{whotGame.lastMove}}
                    <br />
                    <div v-if="whotGame.whot.shape != ''" class="text-weight-bold text-secondary">{{whotGame.whot.shape}}</div>
                </q-banner>
            </div>
            <div class="row">
                <div class="col-12 col-sm-5 col-md-3">
                    <gametable />
                </div>
                <div v-for="player in whotGame.players" :key="player.id" class="col-12 col-sm-auto">
                    <div v-if="whotUser.username == player.name">
                        <playersbox :key="componentKey" :player="player" />
                    </div>
                </div>
            </div>
        </q-card-section>
        <q-dialog v-model="gameOverDialog">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Game Over</div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data: () => ({
        componentKey: 0,
        gameScoresDialog: false,
        gameOverDialog: false
    }),
    computed: {
        ...mapGetters("users", ["whotUser"]),
        ...mapGetters("game", ["whotGame", "whotSettings", "gameShout"])
    },
    components: {
        playerbox: () => import("../../player/PlayerBox"),
        playersbox: () => import("../../player/PlayersBox"),
        gametable: () => import("../../Table/GameTable"),
        gamescores: () => import("./GameScores"),
    },
    methods: {
        ...mapActions("game", ["updateSound"]),
        changeSound() {
            console.log(this.whotSettings.sound)
            this.updateSound()
        },
        leaveGame () {
            this.$q.dialog({
                title: 'Quit Game',
                message: 'This must be a surely be a mistake! You sure?!',
                cancel: true,
                persistent: true
            }).onOk(() => {
                this.$root.$emit("leaveGame")
                this.$emit("closeDialog")
            }).onOk(() => {
                // console.log('>>>> second OK catcher')
            }).onCancel(() => {
                // console.log('>>>> Cancel')
            }).onDismiss(() => {
                // console.log('I am triggered on both OK and Cancel')
            })
        },
    },
    mounted() {
        this.$root.$on("refreshGameBoard", () => {
            this.componentKey ++
        })

        this.$root.$on("refreshShouts", () => {
            this.componentKey ++
        })   

        this.$root.$on("gameOver", () => {
            this.gameOverDialog = true
        })
    }
}
</script>

<style lang="scss" scoped>
.lastMove {
    border: 2px solid brown;
    border-radius: 5px;
    font-size: 1.2em;
}
</style>