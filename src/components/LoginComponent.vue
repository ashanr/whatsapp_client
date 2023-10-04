<template>
    <div>
      <h1>{{ msg }}</h1>
      <div v-if="qrCode">
        <img :src="qrCode" alt="WhatsApp QR Code" />
      </div>
      <button @click="fetchQRCode">Fetch QR Code</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        qrCode: null,
      };
    },
    methods: {
      async fetchQRCode() {
        // Fetch QR code from the backend
        const response = await fetch('http://localhost:3000/get-qr-code');
        const data = await response.json();
        this.qrCode = data.qrImageUrl;
      },
    },
  };
  </script>
  