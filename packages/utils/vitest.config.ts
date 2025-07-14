import sharedConfig from "@yamada-ui/workspace/vitest/config"
import { defineConfig, mergeConfig } from "vitest/config"

export default mergeConfig(sharedConfig, defineConfig({}))
