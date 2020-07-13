<template>
    <q-card flat bordered class="my-card gameTable bg-dark">
        <div class="row no-wrap">
            <market />
            <div class="row">
                <div class="col-12">
                    <lastplayedcards />
                </div>
                <div class="col-12">
                    <playingcard />
                </div>
            </div>
        </div>
    </q-card>
</template>

<script>
export default {
    components: {
        market: () => import("./Market"),
        playingcard: () => import("./PlayingCard"),
        lastplayedcards: () => import("./LastPlayedCards"),
    }
}
</script>

<style lang="scss" scoped>
.gameTable {
    width: 230px;
}

@media screen and (max-width: 380px) {
  .gameTable {
    //   width: 100%;
    //   border: 1px solid red;
  }
}
</style>