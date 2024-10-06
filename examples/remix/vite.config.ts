import { vitePlugin as remix } from "@remix-run/dev"
import { installGlobals } from "@remix-run/node"
import { defineConfig } from "vite"

installGlobals()

export default defineConfig({
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
  server: {
    port: 4447,
  },
})
