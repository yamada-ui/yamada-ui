import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CheckCheck as LucideCheckCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CheckCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CheckCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCheckCheckIcon} {...props} />,
)

/**
 * @deprecated Use `CheckCheckIcon` instead.
 */
export const CheckCheck = CheckCheckIcon
