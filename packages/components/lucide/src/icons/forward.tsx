import { forwardRef } from "@yamada-ui/core"
import { Forward as ForwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ForwardProps = LucideIconProps

/**
 * `Forward` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Forward = forwardRef<ForwardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ForwardIcon} {...props} />
))
