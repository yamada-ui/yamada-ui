import type { System } from "../system"
import { toKebabCase, toPascalCase } from "../../utils"

export function getDisplayName(name: string, fallback?: string): string
export function getDisplayName(
  name: string | undefined,
  fallback: string,
): string
export function getDisplayName(name: string, fallback: string): string
export function getDisplayName(
  name: string | undefined,
  fallback?: string,
): string | undefined
export function getDisplayName(
  name: string | undefined,
  fallback = "StyledComponent",
) {
  return name ? toPascalCase(name.replace(/--|__/g, "-")) : fallback
}

export function getClassName(
  nameOrClassName: string,
  fallback?: string,
): { (system: System): string }
export function getClassName(
  nameOrClassName: string | undefined,
  fallback: string,
): { (system: System): string }
export function getClassName(
  nameOrClassName: string,
  fallback: string,
): { (system: System): string }
export function getClassName(
  nameOrClassName?: string,
  fallback?: string,
): { (system: System): string | undefined }
export function getClassName(
  nameOrClassName: string | undefined,
  fallback?: string,
) {
  return function (system: System) {
    return nameOrClassName
      ? system.utils.getClassName(toKebabCase(nameOrClassName))
      : fallback
  }
}
