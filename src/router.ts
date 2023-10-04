import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from './components/LoginComponent.vue';
import MessageComponent from './components/MessageComponent.vue';  // Import the new component

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: LoginComponent,
    },
    {
      path: '/messages',
      component: MessageComponent,  // Add the new route here
    },
    // Add more routes as needed
  ],
});
