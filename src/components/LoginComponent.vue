<template>
  <div class="container bg-whatsapp-bg text-center">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card bg-whatsapp-header text-white">
          <div class="card-header">
            <h1>Login to Whatsapp</h1>
          </div>
          <div class="card-body bg-whatsapp-bg">
            <div @click="goToMessages">
              <!-- Your QR Code here -->
              <img src="../assets/qr_code.svg" alt="QR Code" class="img-fluid" />
            </div>
            <button @click="goToMessages" class="btn btn-whatsapp btn-login">Login</button>
          </div>
        </div>
      </div>
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

<style scoped>
.bg-whatsapp-header {
  background-color: #075E54;
  color: white;
}

.bg-whatsapp-bg {
  background-color: #ECE5DD;
  color: black;
}

.btn-login {
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}

</style>
