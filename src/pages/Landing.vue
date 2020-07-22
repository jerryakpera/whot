<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-tab name="login" label="Sign in" />
        <q-tab name="join" label="Join" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login />
        </q-tab-panel>

        <q-tab-panel name="join">
          <join />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data: () => ({
    tab: "login"
  }),
  components: {
    login: () => import("../components/Auth/Login"),
    join: () => import("../components/Auth/Join")
  }
};
</script>
