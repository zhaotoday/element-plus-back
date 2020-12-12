import time from "jt-time";
import consts from "@/utils/consts";
import helpers from "@/utils/helpers";

export default app => {
  app.config.globalProperties.$time = time;
  app.config.globalProperties.$consts = consts;
  app.config.globalProperties.$helpers = helpers;
};
