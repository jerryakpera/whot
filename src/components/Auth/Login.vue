<template>
    <div>
        <q-card-section>
            <loading v-if="loading" />
            <form  v-if="!loading" @submit.prevent="submitSigninForm">
                <q-input
                class="q-ma-xs"
                bg-color="grey-4"
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
                bg-color="grey-4"
                filled
                v-model="user.password"
                :type="!isPassword ? 'password' : 'text'"
                placeholder="password"
                ref="password"
                :rules="[ val => val.length >= 6 || 'Must be at least 6 characters']"
                dense
                lazy-rules
                @keyup.enter="submitLoginForm"
                >
                <template v-slot:prepend>
                    <q-icon size="xs" name="vpn_key" />
                </template>
                <template v-slot:append>
                    <q-icon
                    size="xs"
                    class="cursor-pointer text-accent"
                    :name="isPassword ? 'visibility_off' : 'visibility'"
                    v-on:click="isPassword = !isPassword"
                    ></q-icon>
                </template>
                </q-input>
            </form>
        </q-card-section>

        <q-card-actions v-if="!loading" align="right" class="bg-white text-teal">
            <q-btn @click="submitLoginForm" class="q-mr-md" unelevated color="blue-6" label="Login" />
        </q-card-actions>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data: () => ({
        loading: false,
        user: {
        email: "",
        password: ""
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
        ...mapActions("users", ["logUserIn"]),
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
        submitLoginForm() {
        this.loading = true;
        this.$refs.email.validate();
        this.$refs.password.validate();

        if (!this.$refs.email.hasErrors && !this.$refs.password.hasError) {
            this.signUserIn();
        }
        },
        signUserIn() {
            this.logUserIn(this.user)
            .then(data => {
            this.loading = false;
            this.showNotif("Logged in");
            this.$emit("closeDialog");
            this.$router.push("/lobby");
            })
            .catch(err => {
            this.loading = false;
            this.showNotif(err.message, "negative");
            });
        }
    },
    mounted() {
        this.$refs.email.focus();
    }
}
</script>