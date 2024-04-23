import type { ConfigOptions } from "axe-playwright/dist/types"

type Rule = Required<ConfigOptions>["rules"][number]

export const A11Y_RULES: Rule[] = [{ id: "color-contrast", enabled: false }]
