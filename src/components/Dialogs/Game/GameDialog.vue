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
                <div class="col-12 col-sm-5 col-md-3">
                    <gametable />
                </div>
                <div class="col-12 col-sm-auto">
                    <playersbox />
                </div>
            </div>
        </q-card-section>
      </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("users", ["whotUser"]),
        ...mapGetters("game", ["whotGame"]),
    },
    components: {
        playerbox: () => import("../../player/PlayerBox"),
        playersbox: () => import("../../player/PlayersBox"),
        gametable: () => import("../../Table/GameTable"),
    },
    methods: {
        leaveGame() {
            console.log("Are you sure!?")
        }
    }
}
</script>