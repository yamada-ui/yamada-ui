import { forwardRef } from "@yamada-ui/core"
import { Variable as VariableIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VariableProps = LucideIconProps

/**
 * `Variable` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Variable = forwardRef<VariableProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VariableIcon} {...props} />
))
