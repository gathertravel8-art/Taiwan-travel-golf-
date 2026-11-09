import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { rmSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";

const root = import.meta.dirname;
const output = path.resolve(root, "dist/public");

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "exclude-development-debug-assets",
      apply: "build",
      closeBundle() {
        rmSync(path.join(output, "__manus__"), { recursive: true, force: true });
      },
    },
  ],
  root: path.resolve(root, "client"),
  envDir: root,
  resolve: {
    alias: {
      "@": path.resolve(root, "client/src"),
      "@shared": path.resolve(root, "shared"),
    },
  },
  build: {
    outDir: output,
    emptyOutDir: true,
  },
  server: { port: 3000, host: true },
});
