<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Display name"  v-model="displayName" required>
        <input type="email" placeholder="Email" v-model="email" required>
        <input type="password" placeholder="Password" v-model="password" required>
        <div class="error">{{ error }}</div>
        <button>Sign up</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composable/useSignup'

export default {
    setup(props, context){
        const { error, signup } = useSignup()

        // ref
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if(!error.value) {
                context.emit('signup')
            }
        }
        
        return { displayName, email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>