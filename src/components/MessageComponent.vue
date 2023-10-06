<template>
    <div class="message-component container">
      <div class="chat-header bg-whatsapp-header text-white">
        <h2>Chat with Ashan</h2>
      </div>
      <div class="chat-box bg-whatsapp-bg">
        <div class="message row" v-for="message in messages" :key="message.id">
          <div :class="message.sender === 'me' ? 'col-12 text-end' : 'col-12 text-start'">
            <span :class="message.sender === 'me' ? 'bg-whatsapp-me text-white' : 'bg-whatsapp-them text-white'">
              {{ message.text }}
            </span>
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message" class="form-control" />
        <button @click="sendMessage" class="btn btn-whatsapp">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MessageComponent',
    data() {
      return {
        newMessage: '',
        messages: [
          { id: 1, sender: 'me', text: 'Hello' },
          { id: 2, sender: 'them', text: 'Hi Ashan!' },
          { id: 3, sender: 'me', text: 'How are you?' },
        ],
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() === '') return;
        this.messages.push({ id: Date.now(), sender: 'me', text: this.newMessage.trim() });
        this.newMessage = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .message-component {
    width: 400px;
    margin: auto;
  }
  
  .chat-header {
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;
  }
  
  .chat-box {
    height: 300px;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .message {
    margin: 10px;
  }
  
  .message-left {
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
  }
  
  .message-right {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
    float: right;
  }
  
  .chat-input {
    margin-top: 10px;
  }
  
  input[type="text"] {
    width: 80%;
    padding: 10px;
  }
  
  button {
    padding: 11px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
  }

  .bg-whatsapp-header {
  background-color: #075E54;
}

.bg-whatsapp-bg {
  background-color: #ECE5DD;
}

.bg-whatsapp-me {
  background-color: #060c01;
}

.bg-whatsapp-them {
  background-color: black;
}

.btn-whatsapp {
  background-color: #075E54;
  color: white;
}

  </style>
  