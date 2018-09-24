<template>
    <div class="chat container">
        <h2 class="center orange-text">Super Chat</h2>
        <div class="card">
            <div class="card-content">
    <ul class="messages" v-chat-scroll>
        <li v-for= "message in messages" :key= "message.id">
            <span class="amber-text">{{ message.name }}</span>
            <span class="brown-text text-darken-4">{{ message.content }}</span>
            <span class="brown-text text-lighten-2 time">{{ message.timestamp }}</span>
    </li>
    </ul>
           <div class="card-action">
               <NewMessage :name="name"></NewMessage>
    </div>     
    </div>
    </div>
  </div>
</template>

<script>
    import NewMessage from '@/components/NewMessage'
    import database from '@/firebase/init'
    import moment from 'moment'
    export default {
        name: 'Chat',
        props: ['name'],
        components: {
            NewMessage
        },
        data() {
            return {
messages : []
            }
        }, 
        created(){
            let ref = database.collection('messages').orderBy('timestamp')
            
            ref.onSnapshot(snapshot =>{
                snapshot.docChanges().forEach(change => {
                    if(change.type == 'added'){
                        let doc = change.doc
                        this.messages.push({
                            id: doc.id, 
                            name: doc.data().name, 
                            content: doc.data().content, 
                            timestamp: moment(doc.data().timestamp).format('MMMM Do YYYY, h:mm:ss a')
                        })
                    }
            
                })
            })
        }
    }

</script>

<style>
    .chat h2{
        margin-bottom: 40px;
    }
    
    .chat .time{
        display: block;
        font-size: 10px;
    }
    
    .messages {
        max-height: 300px;
        overflow: auto;
    }
    
    .messages::-webkit-scrollbar{
        width: 3px;
    }
    
    .messages::-webkit-scrollbar-track{
        background: #ddd;
    }
    
    .messages::-webkit-scrollbar{
        background: #aaa;
    }

</style>
