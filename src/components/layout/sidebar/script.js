import { ref, getCurrentInstance } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";

export default {
  name: "TheSidebar",
  setup() {
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    const sidebarMenus = ctx.$consts.SidebarMenu;

    const getActiveKey = () => {
      let key = "0-0";

      sidebarMenus.forEach((item1, index1) => {
        item1.children.forEach((item2, index2) => {
          if (router.path === item2.path) {
            key = `${index1}-${index2}`;
          }
        });
      });

      return key;
    };

    const activeKey = ref(getActiveKey());

    onBeforeRouteUpdate((to, from, next) => {
      console.log(0)
      next();
    });

    const onSelect = key => {
      const indexes = key.split("-");
      const index1 = indexes[0];
      const index2 = indexes[1];

      const { path } = sidebarMenus[index1].children[index2];

      router.push(path);
    };

    return {
      router,
      activeKey,
      onSelect
    };
  }
};
