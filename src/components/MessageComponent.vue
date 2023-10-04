<template>
    <div class="message-container">
        <h1 class="header">WhatsApp Messages</h1>
        <div v-for="chat in chats" :key="chat.id" class="chat-container">
            <h2 class="chat-name">{{ chat.name }}</h2>
            <ul class="message-list">
                <li v-for="message in chat.messages" :key="message.id" class="message">
                    <span v-if="message.fromMe" class="message-sender me">Me: </span>
                    <span v-else class="message-sender">{{ message.sender }}: </span>
                    <span class="message-text">{{ message.text }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    this.qrData = qr;
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

// send a message
const chat = await client.getChatById('1');
chat.sendMessage('Hello');

//receive messages
client.on('message', (message) => {
    console.log(`Received message from ${message.from}: ${message.body}`);
});


export default {
    data() {
        return {
            chats: [
                {
                    id: 1,
                    name: 'Chat 1',
                    messages: [
                        { id: 1, text: 'Hello', fromMe: true },
                        { id: 2, text: 'Hi', fromMe: false, sender: 'Friend' },
                    ],
                },
                {
                    id: 2,
                    name: 'Chat 2',
                    messages: [
                        { id: 1, text: 'How are you?', fromMe: true },
                        { id: 2, text: 'I am fine', fromMe: false, sender: 'Friend' },
                    ],
                },
                // Add more chats here
            ],
        };
    },
    mounted() {
        this.initWebSocket();
    },
    methods: {
        initWebSocket() {
            // Initialize WebSocket and listen for new messages    
        },
    },
};
</script>
  

<style scoped>
.message-container {
    text-align: center;
    margin: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
}

.header {
    font-size: 24px;
    margin-bottom: 20px;
}

.chat-container {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
}

.chat-name {
    font-size: 20px;
    margin-bottom: 10px;
}

.message-list {
    list-style: none;
    padding: 0;
}

.message {
    margin: 5px 0;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.message-sender.me {
    font-weight: bold;
    color: #007bff;
}

.message-text {
    margin-left: 5px;
}
</style>