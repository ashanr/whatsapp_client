<template>
  <div>
    <h1>Login to Whatsapp</h1>
    <div @click="goToMessages">
      <!-- Your QR Code here -->
      <img src="../assets/qr_code.svg" alt="QR Code" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LoginComponent extends Vue {
  goToMessages() {
    this.$router.push('/messages');
  }
}
</script>
