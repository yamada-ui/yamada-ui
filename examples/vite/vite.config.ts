import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

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
