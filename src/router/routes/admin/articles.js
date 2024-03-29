export default {
  path: "articles",
  component: () => import("@/views/articles"),
  children: [
    {
      path: "categories",
      component: () => import("@/views/categories/list")
    },
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
