import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Refrigerator as LucideRefrigeratorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RefrigeratorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefrigeratorIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRefrigeratorIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RefrigeratorIcon` instead.
 */
export const Refrigerator = RefrigeratorIcon
