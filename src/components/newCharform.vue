<template>
    <form>
        <div>
            <textarea
                placeholder="type a message and hit send button"
                v-model="message"
                required
            ></textarea>
            <button @click.prevent="handleSubmit">
                <span>Send </span>
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
        <div class="error">{{ error}}</div>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composable/getUser'
import useCollection from '../composable/useCollection'
import { timestamp } from '../firebase/config'

export default {
    setup(){
        const { user } = getUser()
        const { addDoc, error } = useCollection('messages')

        const message = ref('')

        const handleSubmit = async () =>{
            if(message.value.length < 1){
                return
            }
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }

            await addDoc(chat)
            if(!error.value){
                message.value = ''
            }
        }

        return { message, handleSubmit, error }
    }
}
</script>

<style scoped>
    form{
        margin: 10px;
    }
    form div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    textarea{
        width: 85%;
        height: 45px;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
    textarea::placeholder{
        font-size: 14px;
    }
    button{
        background: #0cbb06;
    }
    @media screen and (max-width: 480px){
        button span{
            display: none;
        }
    }
</style>>
