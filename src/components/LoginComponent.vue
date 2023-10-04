<template>
    <div>
      <h1>WhatsApp Web QR Code</h1>
      <div v-qrcode="qrData" v-if="qrData"></div>
    </div>
  </template>
  
  <script>
  import { Client } from 'whatsapp-web.js';
  
  export default {
    data() {
      return {
        client: null,
        qrData: null,
      };
    },
    mounted() {
      this.initializeWhatsApp();
    },
    methods: {
      initializeWhatsApp() {
        this.client = new Client();
  
        this.client.on('qr', (qr) => {
          // Generate and display QR code for WhatsApp Web login
          this.qrData = qr;
        });
  
        this.client.on('ready', () => {
          console.log('Client is ready!');
          this.qrData = null;
          // Set isAuthenticated flag to true
          localStorage.setItem('isAuthenticated', 'true');
          this.$router.push('/messages');  // Redirect to Messages.vue
        });
  
        this.client.initialize();
      },
    },
  };
  </script>
  