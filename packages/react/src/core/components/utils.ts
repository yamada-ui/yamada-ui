import { toPascalCase } from "../../utils"

export function getDisplayName(name?: string, fallback = "StyledComponent") {
  return name ? toPascalCase(name.replace(/--|__/g, "-")) : fallback
}

export function getClassName(name?: string, fallback?: string) {
  return name ? `ui-${name}` : fallback
}
