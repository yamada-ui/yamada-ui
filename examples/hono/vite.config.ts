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
      plugins: [
        devServer({
          entry: "src/index.tsx",
          exclude: ["/*", ...defaultOptions.exclude],
        }),
      ],
      resolve: {
        alias: {
          "@": "/src",
        },
      },
      server: {
        port: 4448,
      },
      ssr: {
        external: ["react", "react-dom"],
      },
    }
  }
})
