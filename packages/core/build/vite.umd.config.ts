import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist/umd",
    lib: {
      entry: resolve(__dirname, "../index.ts"),
      name: "NekonaUI",
      fileName: "index",
      formats: ["umd"],
    },
    rollupOptions: {
        external: ["vue"],
        output: {
            exports: "named",
            globals: {
                vue: "Vue",
            },
            assetFileNames: (assetInfo) => {
                if (assetInfo.names?.[0] === "index.css") return "index.css"
                return assetInfo.names?.[0] || assetInfo.name as string
            }
        }
    },
  },
});