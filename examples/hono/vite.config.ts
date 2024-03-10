import pages from "@hono/vite-cloudflare-pages"
import devServer, { defaultOptions } from "@hono/vite-dev-server"
import { defineConfig } from "vite"

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: "./src/client.tsx",
          output: {
            entryFileNames: "static/client.js",
          },
        },
      },
      resolve: {
        alias: {
          "@": "/src",
        },
      },
    }
  } else {
    return {
      ssr: {
        external: ["react", "react-dom"],
      },
      plugins: [
        pages(),
        devServer({
          exclude: ["/*", ...defaultOptions.exclude],
          entry: "src/index.tsx",
        }),
      ],
      server: {
        port: 4448,
      },
      resolve: {
        alias: {
          "@": "/src",
        },
      },
    }
  }
})
