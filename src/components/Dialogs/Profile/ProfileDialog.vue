<template>
  <q-card class="my-card bg-secondary text-white" style="width: 250px;">
    <q-card-section class="bg-dark">
      <div class="text-h6">{{whotUser.username}}</div>
    </q-card-section>

    <q-card-section class="text-center" v-if="loading">
      <loading />
    </q-card-section>

    <q-card-section v-if="!loading">
      <q-list bordered>
        <q-item>
          <q-item-section avatar>
            <q-icon name="score" size="md" color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Points</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge :label="whotUser.points" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="casino" size="md" color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Games Played</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge :label="whotUser.played" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="military_tech" size="md" color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Games Won</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge :label="whotUser.won" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="sentiment_dissatisfied" size="md" color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Games Lost</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge :label="whotUser.lost" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    loading: false,
    whotUser: {}
  }),
  components: {
    loading: () => import("../../Universal/Loading")
  },
  methods: {
    ...mapActions("users", ["fetchUserDetails", "logout"]),
    fetchProfile() {
      this.loading = true
      
      this.fetchUserDetails()
      .then(whotUser => {
        this.whotUser = whotUser
        this.loading = false
      })
      .catch(() => {
        this.loading = false
        this.logout().then(() => {
          this.$router.push("/");
        });
        // this.$emit("closeDialog")
        // Stop loading & show error
      })
    }
  },
  mounted() {
    this.fetchProfile()
  }
};
</script>