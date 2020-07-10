<template>
  <q-card style="width: 250px">
    <q-bar>
      <q-icon name="lock" />
      <div class="text-subtitle2">Join Private Game</div>
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>
    <q-card-section>
      <q-input
        bg-color="secondary"
        filled
        v-model="privateGameID"
        placeholder="game ID"
        dense
        ref="gameID"
        :rules="[val => !!val || 'required']"
        lazy-rules
        @keyup.enter="joinPrivateGame"
      />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn @click="joinPrivateGame" color="primary" label="Join" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data: () => ({
    componentKey: 0,
    privateGameID: ""
  }),
  methods: {
    joinPrivateGame() {
      this.$root.$emit("joinPrivateGame", this.privateGameID)
    }
  },
  mounted() {
    this.$refs.gameID.focus()
  }
};
</script>