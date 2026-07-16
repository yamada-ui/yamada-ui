import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-shadow/emotion": "react-shadow/emotion.esm.js",
    },
    tsconfigPaths: true,
  },
})
