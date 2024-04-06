import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4446,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
