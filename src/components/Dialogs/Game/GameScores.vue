<template>
    <q-card>
        <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Scores</div>
            <q-space />
            <q-btn size="sm" dense icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
            <div v-for="player in scoreCard.players" :key="player.id" class="text-h6">
                {{player.name}}
                <q-badge class="q-mb-lg" color="orange" text-color="black" :label="player.score" />
            </div>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    props: {
        scoreCard: {
            type: Object,
            required: true
        }
    }
}
</script>