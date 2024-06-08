import { forwardRef } from "@yamada-ui/core"
import { Shell as ShellIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShellProps = LucideIconProps

/**
 * `Shell` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Shell = forwardRef<ShellProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShellIcon} {...props} />
))
