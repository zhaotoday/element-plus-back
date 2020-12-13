import { getCurrentInstance } from "vue";

export default {
  name: "TheSidebar",
  setup(props, ctx2) {
    console.log(ctx2, "===");

    const onSelect = key => {
      const { ctx } = getCurrentInstance();
      const indexes = key.split("-");
      const index1 = indexes[0];
      const index2 = indexes[1];

      alert(ctx.$consts.SidebarMenu[index1][index2].path);
    };

    return {
      onSelect
    };
  }
};
