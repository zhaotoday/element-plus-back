import auth from "@/utils/auth";

export default {
  path: "login",
  component: import("@/views/login"),
  beforeEnter(to, from, next) {
    if (auth.loggedIn()) {
      next("/");
    } else {
      next();
    }
  }
};
