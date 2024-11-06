import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PointerOff as LucidePointerOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PointerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PointerOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucidePointerOffIcon} {...props} />,
)

/**
 * @deprecated Use `PointerOffIcon` instead.
 */
export const PointerOff = PointerOffIcon
