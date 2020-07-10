<template>
  <q-card class="my-card bg-secondary text-white" style="width: 250px;">
    <q-card-section class="bg-dark">
      <div class="text-h6">{{whotUser.username}}</div>
    </q-card-section>

    <q-card-section>
      <q-list bordered>
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
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("users", ["whotUser"])
  }
};
</script>