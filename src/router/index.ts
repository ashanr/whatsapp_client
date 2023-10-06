import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LoginComponent from '@/components/LoginComponent.vue';
import MessageComponent from '@/components/MessageComponent.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', component: LoginComponent },
  { path: '/messages', component: MessageComponent },
];

const router = new VueRouter({
  routes,
});

export default router;
