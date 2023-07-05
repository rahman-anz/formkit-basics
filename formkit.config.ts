import { DefaultConfigOptions } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";
const config: DefaultConfigOptions = {
  plugins: [createAutoAnimatePlugin()],
  theme: "genesis",
  messages: {
    en: {
      validation: {
        username_is_unique({ args, name, node }) {
          return `${node.value} is already taken`;
        },
      },
    },
  },
  rules: {
    username_is_unique(node) {
      const userNames = ["lindapark", "freddymercury", "jonas"];
      return !userNames.includes(node.value as string);
    },
  },
};
export default config;
