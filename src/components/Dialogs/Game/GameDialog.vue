<template>
    <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn @click="leaveGame" dense flat icon="close">
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section horizontal>
            <q-scroll-area
                horizontal
                style="height: 240px; width: 100%;"
                class="bg-grey-10 rounded-borders"
            >
                <div class="row q-pa-sm no-wrap">
                    <div class="q-mr-sm" v-for="(player, i) in whotGame.players" :key="player.id">
                        <playerbox :player="player" :index="i" />
                    </div>
                </div>
            </q-scroll-area>
        </q-card-section>

        <q-card-section class="q-pa-sm">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <gametable />
                </div>
                <div class="col-12 col-sm-6">
                    <div class="text-h2">SOLID</div>
                </div>
            </div>
        </q-card-section>
      </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("game", ["whotGame"])
    },
    components: {
        playerbox: () => import("../../player/PlayerBox"),
        gametable: () => import("../../Table/GameTable"),
    },
    methods: {
        leaveGame() {
            console.log("Are you sure!?")
        }
    }
}
</script>