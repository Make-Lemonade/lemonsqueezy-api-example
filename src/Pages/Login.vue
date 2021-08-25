<template>
    <div class="p-6 py-15">
        <div class="flex items-center justify-center">
            <a href="https://www.lemonsqueezy.com">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.44011 24.4129L15.506 28.1336C16.5057 28.595 17.2114 29.3693 17.5924 30.2575C18.5563 32.5067 17.239 34.8071 15.1709 35.6343C13.1025 36.4613 10.8981 35.9291 9.89582 33.5901L6.38556 25.3782C6.11354 24.7416 6.79687 24.1162 7.44011 24.4129" fill="#FFC233"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.92482 22.0046L16.2509 18.8643C19.018 17.8206 22.0408 19.7953 22 22.6646C21.9994 22.7021 21.9987 22.7395 21.9977 22.7773C21.938 25.5714 18.9993 27.4494 16.293 26.4609L7.93271 23.4078C7.26581 23.1644 7.26088 22.255 7.92482 22.0046" fill="#FFC233"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.45767 20.9168L15.6425 17.4468C18.3623 16.2936 19.0525 12.8325 16.9224 10.8326C16.8945 10.8063 16.8666 10.7803 16.8383 10.7543C14.7499 8.82013 11.2974 9.50112 10.1085 12.0487L6.43564 19.9194C6.14259 20.5471 6.8049 21.1935 7.45767 20.9168" fill="#FFC233"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.35143 19.5456L8.32719 11.4044C8.69612 10.395 8.62779 9.36556 8.24637 8.47734C7.28051 6.22905 4.66482 5.50331 2.5971 6.33186C0.529704 7.16073 -0.638522 9.04315 0.365771 11.3812L3.89903 19.5843C4.17302 20.2199 5.11424 20.1948 5.35143 19.5456" fill="#FFC233"></path>
                </svg>
            </a>
        </div>
        <div class="text-center my-5">
            <h1 class="text-24 font-medium">Sign in to Lemon Squeezy</h1>
        </div>
        <form @submit.prevent="submit" class="flex flex-col">
            <div class="form-group">
                <input type="text" class="form-input" v-model="apiKey" placeholder="Enter your Lemon Squeezy API key" required :disabled="working" />
                <p class="form-error" v-if="error">{{ error }}</p>
                <p class="form-input-desc">
                    Create an API key in your
                    <a href="https://app.lemonsqueezy.com/account" target="_blank" class="text-wtf-majorelle hover:underline">account settings</a>.
                </p>
            </div>
            <button class="btn btn-primary" :disabled="!apiKey || working">
                <span class="mx-auto">Login</span>
            </button>
        </form>
    </div>
</template>

<script>
import { set, del } from 'idb-keyval';
import api from '../api';

export default {
    data() {
        return {
            apiKey: '',
            error: '',
            working: false,
        }
    },

    emits: ['login'],

    methods: {
        submit() {
            this.error = '';
            this.working = true;

            set('user.token', this.apiKey).then(() => {
                api.get('v1/stores')
                    .then(response => {
                        if (response.status === 200) {
                            this.$router.push({ name: 'dashboard' });
                        } else {
                            this.error = 'Invalid API key';
                            del('user.token');
                        }
                    })
                    .catch(() => {
                        this.error = 'Invalid API key';
                        del('user.token');
                    })
                    .finally(() => {
                        this.working = false;
                    });
            });
        }
    },

    watch: {
        apiKey() {
            this.error = '';
        }
    }
}
</script>
