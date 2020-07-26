<template>
    <div>
        <q-card-section class="text-center" v-if="loading">
            <loading />
        </q-card-section>

        <q-card-section v-if="!loading">
            <form @submit.prevent="submitRegisterForm">
                <q-input
                class="q-ma-xs text-white"
                bg-color="white"
                filled
                v-model="user.username"
                placeholder="username"
                dense
                ref="username"
                :rules="[val => !!val || 'required']"
                lazy-rules
                >
                <template v-slot:prepend>
                    <q-icon size="xs" name="person" />
                </template>
                </q-input>
                <q-input
                class="q-ma-xs"
                bg-color="white"
                filled
                v-model="user.email"
                dense
                placeholder="email"
                ref="email"
                :rules="[val => !!val || 'Valid email required', isValidEmail(),]"
                lazy-rules
                >
                <template v-slot:prepend>
                    <q-icon size="xs" name="alternate_email" />
                </template>
                </q-input>
                <q-input
                class="q-ma-xs"
                bg-color="white"
                filled
                v-model="user.password"
                :type="!isPassword ? 'password' : 'text'"
                placeholder="password"
                ref="password"
                :rules="[ val => val.length >= 6 || 'Must be at least 6 characters']"
                dense
                lazy-rules
                >
                <template v-slot:prepend>
                    <q-icon size="xs" name="vpn_key" />
                </template>
                <template v-slot:append>
                    <q-icon
                    size="xs"
                    class="cursor-pointer text-blue-10"
                    :name="isPassword ? 'visibility_off' : 'visibility'"
                    v-on:click="isPassword = !isPassword"
                    ></q-icon>
                </template>
                </q-input>
                <q-input
                class="q-ma-xs"
                bg-color="white"
                :type="!isConfirmPassword ? 'password' : 'text'"
                filled
                dense
                v-model="user.confirmpassword"
                placeholder="confirm password"
                ref="confirmpassword"
                :rules="passwordsMatch"
                lazy-rules
                @keyup.enter="submitRegisterForm"
                >
                <template v-slot:prepend>
                    <q-icon size="xs" name="vpn_key" />
                </template>
                <template v-slot:append>
                    <q-icon
                    size="xs"
                    class="cursor-pointer text-blue-10"
                    :name="isConfirmPassword ? 'visibility_off' : 'visibility'"
                    v-on:click="isConfirmPassword = !isConfirmPassword"
                    ></q-icon>
                </template>
                </q-input>
            </form>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
            <q-btn @click="submitRegisterForm" class="q-mr-md" unelevated color="blue-6" label="Join" />
        </q-card-actions>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    loading: false,
    user: {
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    },
    isPassword: false,
    isConfirmPassword: false
  }),
  computed: {
    passwordsMatch() {
      return [
        v => !!v || "cannot be empty",
        v => v == this.$refs.password.value || "passwords must match"
      ];
    }
  },
  components: {
    loading: () => import("../Universal/Loading")
  },
  methods: {
    ...mapActions("users", ["registerUser"]),
    showNotif(msg, color = "primary") {
      this.$q.notify({
        message: msg,
        color: color
      });
    },
    isValidEmail() {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(this.user.email) || "Invalid email";
    },
    submitRegisterForm() {
      this.loading = true;
      this.$refs.username.validate();
      this.$refs.email.validate();
      this.$refs.password.validate();
      this.$refs.confirmpassword.validate();

      if (
        !this.$refs.username.hasError &&
        !this.$refs.email.hasErrors &&
        !this.$refs.password.hasError &&
        !this.$refs.confirmpassword.hasError
      ) {
        this.registerNewUser();
      }
    },
    registerNewUser() {
      this.registerUser(this.user)
        .then(data => {
          this.loading = false;
          this.showNotif("Your profile has been created");
          this.$emit("closeDialog");
          this.$router.push("/onboarding");
        })
        .catch(err => {
          this.loading = false;
          this.showNotif(err.message, "negative");
          // console.log(0, err);
        });
    }
  },
  mounted() {
    this.$refs.username.focus();
  }
};
</script>