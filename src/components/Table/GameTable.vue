<template>
    <q-card flat bordered class="my-card gameTable bg-dark">
        <div class="row no-wrap">
            <market />
            <playingcard />
        </div>
    </q-card>
</template>

<script>
export default {
    components: {
        market: () => import("./Market"),
        playingcard: () => import("./PlayingCard")
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