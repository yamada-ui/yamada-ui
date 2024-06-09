import { forwardRef } from "@yamada-ui/core"
import { LassoSelect as LassoSelectIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LassoSelectProps = LucideIconProps

/**
 * `LassoSelect` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LassoSelect = forwardRef<LassoSelectProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LassoSelectIcon} {...props} />
))
