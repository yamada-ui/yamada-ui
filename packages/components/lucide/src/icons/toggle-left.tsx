import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ToggleLeft as LucideToggleLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ToggleLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToggleLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideToggleLeftIcon} {...props} />,
)

/**
 * @deprecated Use `ToggleLeftIcon` instead.
 */
export const ToggleLeft = ToggleLeftIcon
