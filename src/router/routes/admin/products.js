export default {
  path: "products",
  component: () => import("@/views/products"),
  children: [
    {
      path: "categories",
      component: () => import("@/views/categories/list")
    },
    {
      path: "list",
      component: () => import("@/views/products/list")
    },
    {
      path: "list/form/:id?",
      component: () => import("@/views/products/form")
    }
  ]
};
