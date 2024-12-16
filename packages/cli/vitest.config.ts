import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    deps: {
      inline: ["ts-morph"],
    },
    environment: "node",
    include: ["tests/**/*.test.{ts,tsx}"],
  },
})
