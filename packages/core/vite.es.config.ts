import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts"
import { readdirSync } from "fs";

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export default defineConfig({
  plugins: [vue(), dts(
    {
      outDir: "dist/types",
      tsconfigPath: "../../tsconfig.build.json",
    }
  )],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "NekonaUI",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.[0] === "index.css") return "index.css";
          return assetInfo.names?.[0] || (assetInfo.name as string);
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"
          }
          if (id.includes("/packages/hooks")) {
            return "hooks"
          }
          if (id.includes("/packages/utils")) {
            return "utils"
          }
          for (const dirName of getDirectoriesSync("../components")) {
            if (id.includes(`/packages/components/${dirName}`)) {
              return dirName
            }
          }
        }
      },
    },
  },
});
