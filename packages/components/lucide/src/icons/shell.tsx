import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Shell as LucideShellIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShellIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShellIcon} {...props} />
))

/**
 * @deprecated Use `ShellIcon` instead.
 */
export const Shell = ShellIcon
