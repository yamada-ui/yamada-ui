import react from "@vitejs/plugin-react-swc"
import { defineWorkspace } from "vitest/config"

export default defineWorkspace([
  {
    test: {
      name: "unit",
      environment: "node",
      exclude: [
        "packages/utils/tests/dom.test.ts",
        "packages/utils/tests/event.test.ts",
        "packages/utils/tests/react.test.tsx",
      ],
      globals: true,
      include: [
        "packages/utils/tests/*.test.ts",
        "packages/theme-tools/tests/*.test.ts",
      ],
    },
  },
  {
    plugins: [react()],
    test: {
      name: "jsdom",
      environment: "jsdom",
      globals: true,
      include: [
        "packages/core/tests/color-mode.test.tsx",
        "packages/core/tests/css.test.tsx",
        "packages/core/tests/theme.test.tsx",
        "packages/components/**/*.test.{ts,tsx}",
        "packages/hooks/**/*.test.{ts,tsx}",
      ],
      setupFiles: ["./scripts/setup-test.ts"],
    },
  },
  {
    plugins: [react()],
    test: {
      name: "browser",
      browser: {
        name: "chromium",
        enabled: true,
        provider: "playwright",
      },
      exclude: [
        "packages/core/tests/color-mode.test.tsx",
        "packages/core/tests/css.test.tsx",
        "packages/core/tests/theme.test.tsx",
      ],
      globals: true,
      include: [
        "packages/core/tests/*.test.ts",
        "packages/core/tests/*.test.tsx",
        "packages/utils/tests/dom.test.ts",
        "packages/utils/tests/event.test.ts",
        "packages/utils/tests/react.test.tsx",
      ],
    },
  },
])
