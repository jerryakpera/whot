<template>
    <q-card style="width: 120px" dark bordered class="bg-grey-9 my-card">
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
            <q-chip 
                size="sm" 
                color="deep-orange" text-color="white" 
                icon="campaign"
            >
                Last Card
            </q-chip>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    data: () => ({
        colors: [
            "red",
            "indigo",
            "green",
            "orange",
            "blue-grey",
            "blue"
        ]
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
    components: {
        whotback: () => import("../Game/WhotBack")
    }
}
</script>