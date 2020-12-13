import { createRouter, createWebHashHistory } from "vue-router";
import publicRoutes from "./routes/public";
import adminRoutes from "./routes/admin";

const routes = [
  {
    path: "/",
    component: () => import("@/views/root"),
    children: [
      {
        path: "/",
        component: () => import("@/components/layout"),
        children: adminRoutes,
        meta: {
          requiresAuth: true
        }
      },
      ...publicRoutes,
      {
        path: ":pathMatch(.*)*",
        component: () => import("@/views/not-fount")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
