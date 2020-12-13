import { createRouter, createWebHashHistory } from "vue-router";
import auth from "@/utils/auth";
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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      auth.logout();
      next({
        path: "login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach(() => {});

export default router;
