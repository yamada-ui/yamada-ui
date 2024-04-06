import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"
import { installGlobals } from "@remix-run/node"

installGlobals()

export default defineConfig({
  server: {
    port: 4447,
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
    }),
  ],
  resolve: {
    alias: {
      "~": "/app",
    },
  },
})
