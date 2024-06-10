import { forwardRef } from "@yamada-ui/core"
import { MousePointerBan as MousePointerBanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MousePointerBanProps = LucideIconProps

/**
 * `MousePointerBan` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointerBan = forwardRef<MousePointerBanProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MousePointerBanIcon} {...props} />,
)
