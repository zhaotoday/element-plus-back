import { createRouter, createWebHashHistory } from "vue-router";
import publicRoutes from "./modules/public";

const routes = [
  {
    path: "/",
    component: () => import("@/views/root"),
    children: [
      {
        path: "/",
        component: () => import("@/components/layout"),
        children: [
          {
            path: "/",
            component: () => import("@/views/dashboard")
          }
        ],
        meta: {
          requiresAuth: true
        }
      },
      ...publicRoutes,
      {
        path: "*",
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
  console.log(to, from, next);
  next();
});

export default router;
