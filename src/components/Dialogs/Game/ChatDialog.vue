<template>
    <q-card style="width: 340px">
        <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn icon="close" size="xs" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
            <q-input dense color="teal" filled v-model="chatMessage" label=". . . chat" ref="message" @keyup.enter="sendMessage">
                <template v-slot:append>
                    <q-icon @click="sendMessage" style="cursor: pointer" color="primary" size="xs" name="send" />
                </template>
            </q-input>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    data: () => ({
        chatMessage: ""
    }),
    methods: {
        sendMessage() {
            if (this.chatMessage.trim() === "") return
            this.$root.$emit("sendMessage", this.chatMessage)
            this.$emit("closeDialog")
        }
    },
    mounted() {
        this.$refs.message.focus()
    }
}
</script>