import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export default defineConfig([
  {
    ignores: ["dist", "coverage", "trace", ".eslintcache"],
  },
  ...tseslint.configs.recommended,
])
