<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Email" v-model="email" required>
        <input type="password" placeholder="Password" v-model="password" required>
        <div class="error">{{ error }}</div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composable/useLogin'

export default {
    setup(props, context){
        const {error, login} = useLogin()
        // ref
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                context.emit('login')
            }
        }
        
        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>