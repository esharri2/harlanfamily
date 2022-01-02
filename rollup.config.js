import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const dev = process.env.NODE_ENV !== "production";

export default [
  {
    input: "scripts/main.js",
    output: {
      file: !dev ? "_site/main.js" : "_temp/main.js",
      format: "es",
    },
    plugins: [
      postcss({
        extract: true,
        extract: "index.css",
      }),
      !dev && terser(),
    ],
  },
  {
    input: "scripts/messages",
    output: {
      file: !dev ? "_site/messages.js" : "_temp/messages.js",
      format: "es",
    },
    plugins: [!dev && terser(), nodeResolve()],
  },
];
