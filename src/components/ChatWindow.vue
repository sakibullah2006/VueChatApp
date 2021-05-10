<template>
    <div class="chat-window">
        <div v-if="error">{{ error }}</div>
        <div v-if="documents" class="messages" ref="messages" data-simplebar v-chat-scroll> 
            <div v-for="doc in formattedDocument" :key="doc.id" class="single" :class="{ me: doc.name === currentName }">
                <span class="name">{{ doc.name }}</span>
                <span class="message" :class="{ self: doc.name === currentName }">{{ doc.message }}</span>
                <span class="createdAt">{{ doc.createdAt }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composable/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from 'vue'

export default {
    props: [ 'currentUser' ],
    setup(props) {
        const { error, documents } = getCollection('messages')
        
        const currentName = props.currentUser

        const formattedDocument = computed( () =>{
            if(documents.value){
                return documents.value.map( doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: time}
                })
            }
        })

        // auto scrolling to buttom messages
        const messages = ref(null)

        onUpdated( () =>{
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return { error, documents, currentName, formattedDocument, messages }
    }

}
</script>

<style>
    .chat-window{
        background: #fafafa;
        padding: 10px 0px;
        padding-left: 10px;
        min-height: 387px;
    }
    .single{
        margin: 18px 0;
    }
    .me{
        text-align: right;
    }
    .me .name{
        display: none;
    }
    .createdAt{
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .name{
        font-weight: bold;
    }
    .messages{
        max-height: 400px;
        overflow: auto;
        padding: 0 20px;
    }
    /* .simplebar-scrollbar:before {
        background-color: red;
        height: 60px;
    }
    .simplebar-scrollbar{
        margin-right: 2px;
    } */
    .message{
        font-size: medium;
        margin-left: 20px;
        display: block;
        padding: 10px;
        border-radius: 20px;
        background: #dddddd;
        display: inline-block;
        line-height: 150%;
        max-width: 80%;
    }
    .self{
        background: #13b9b1;
        color: #fff;
    }

</style>