<template>
    <div class="container">
        <Navbar />
        <ChatWindow :currentUser="user.displayName" /> 
        <newChatform />
    </div>
</template>

<script>
import newChatform from '../components/newCharform'
import ChatWindow from '../components/ChatWindow'
import Navbar from '../components/Navbar.vue'
import getUser from '../composable/getUser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

export default {
    components: { Navbar, newChatform, ChatWindow },
    setup(){
        const { user } =  getUser()
        const router = useRouter()

        watch(user, () =>{
            if(!user.value){
                router.push({ name: 'Welcome'})
            }
        })

        return { user }
    }
}
</script>

<style>

</style>