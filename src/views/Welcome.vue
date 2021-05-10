<template>
    <div class="welcome container">
        <div v-if="showLogin">
            <h2>Login</h2>
            <LoginForm @login="enterChat" />
            <p>Don't have an account yet? <span @click="showLogin = false">Signup</span></p>
        </div>
        <div v-else>
            <h2>Sign up</h2>
            <SignupForm @signup="enterChat" />
            <p>Already have an account? <span @click="showLogin = true">Login</span></p>
        </div>
    </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { SignupForm, LoginForm },
    setup(){

        const router = useRouter()
        const showLogin = ref(true) 

        const enterChat = () =>{
            router.push({ name: 'Chatroom' })
        }

        return { showLogin, enterChat }
    }
}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0 !important;
        max-width: 500px !important;
        min-height: 400px;
        margin: 50px auto !important;
    }
    .welcome p{
        font-size: clamp(70%,80%,120%);
    }
    .welcome form{
        width: 70%;
        margin: 20px auto;
    }
    .welcome label{
        display: block;
        margin: 20px auto;
    }
    .welcome input{
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #7c7c7c;
        margin: 10px auto;
    }
    .welcome span{
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
    .welcome button{
        margin: 20px auto;
    }

</style>