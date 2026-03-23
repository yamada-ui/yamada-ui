import type { ConfigWithExtends } from "@eslint/config-helpers"
import next from "@next/eslint-plugin-next"
import { sharedFiles } from "./shared"

export const nextConfig = {
  name: "next",
  extends: [next.configs.recommended, next.configs["core-web-vitals"]],
  files: sharedFiles,
} satisfies ConfigWithExtends
