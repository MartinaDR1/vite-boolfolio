import { createRouter, createWebHistory } from "vue-router";
import AppHome from './views/AppHome.vue'
import AppAbout from './views/AppAbout.vue'
import AppContacts from './views/AppContacts.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: AppHome,
      },
      {
        path: "/about",
        name: "about",
        component: AppAbout,
      },
      {
        path: "/contacts",
        name: "contacts",
        component: AppContacts,
      }
    ],
});
  
export { router };