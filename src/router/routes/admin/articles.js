export default {
  path: "articles",
  component: () => import("@/views/articles"),
  children: [
    {
      path: "list",
      component: () => import("@/views/articles/list")
    },
    {
      path: "list/form/:id?",
      component: () => import("@/views/articles/form")
    }
  ]
};
