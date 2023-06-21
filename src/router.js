import { createRouter, createWebHistory } from "vue-router";
import AppHome from './views/AppHome.vue'
import AppProjects from './views/AppProjects.vue'
import AppContacts from './views/AppContacts.vue'
import SingleProject from "./views/SingleProject.vue"
import NotFound from "./views/NotFoundPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: AppHome,
      },
      {
        path: "/projects",
        name: "projects",
        component: AppProjects,
      },
      {
        path: "/contacts",
        name: "contacts",
        component: AppContacts,
      },
      {
        path: "/project/:slug",
        name: "single-project",
        component: SingleProject,
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
      },
    ],
});
  
export { router };