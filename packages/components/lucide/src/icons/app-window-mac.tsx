import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AppWindowMac as LucideAppWindowMacIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AppWindowMacIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AppWindowMacIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAppWindowMacIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AppWindowMacIcon` instead.
 */
export const AppWindowMac = AppWindowMacIcon
