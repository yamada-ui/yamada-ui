import { defineConfig } from "oxlint"
import { sharedFiles } from "./shared.ts"

export const nextConfig = defineConfig({
  overrides: [{ files: sharedFiles, plugins: ["nextjs"], rules: {} }],
})
