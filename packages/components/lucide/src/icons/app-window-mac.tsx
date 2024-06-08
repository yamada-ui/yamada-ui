import { forwardRef } from "@yamada-ui/core"
import { AppWindowMac as AppWindowMacIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AppWindowMacProps = LucideIconProps

/**
 * `AppWindowMac` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AppWindowMac = forwardRef<AppWindowMacProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={AppWindowMacIcon} {...props} />,
)
