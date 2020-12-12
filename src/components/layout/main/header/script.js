import { useRouter, getCurrentInstance } from "vue-router";

export default {
  name: "TheHeader",
  setup() {
    const { ctx } = getCurrentInstance();

    const user = {};

    const logout = () => {
      useRouter().push("/logout");
      ctx.$message.success("退出成功");
    };

    return {
      user,
      logout
    };
  }
};
