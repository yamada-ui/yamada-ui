import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Variable as LucideVariableIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VariableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VariableIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVariableIcon} {...props} />
))

/**
 * @deprecated Use `VariableIcon` instead.
 */
export const Variable = VariableIcon
