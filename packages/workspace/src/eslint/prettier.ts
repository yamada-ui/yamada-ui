import type { ConfigWithExtends } from "@eslint/config-helpers"
import prettier from "eslint-config-prettier"
import { sharedFiles } from "./shared"

export const prettierConfig = {
  name: "prettier",
  extends: [prettier],
  files: sharedFiles,
} satisfies ConfigWithExtends
