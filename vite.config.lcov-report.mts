import { defineConfig } from "vite"

export default defineConfig({
  preview: {
    open: true,
  },
  build: {
    outDir: "./coverage/",
  },
})
