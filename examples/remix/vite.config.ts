import { vitePlugin as remix } from "@remix-run/dev"
import { installGlobals } from "@remix-run/node"
import { defineConfig } from "vite"

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
