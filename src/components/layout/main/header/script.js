import { getCurrentInstance } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "TheHeader",
  setup() {
    const { ctx } = getCurrentInstance();

    const user = { username: "管理员" };

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
