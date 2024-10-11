import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MousePointerBan as MousePointerBanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MousePointerBan` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointerBan = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MousePointerBanIcon} {...props} />,
)
