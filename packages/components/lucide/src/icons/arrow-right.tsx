import { forwardRef } from "@yamada-ui/core"
import { ArrowRight as ArrowRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowRightProps = LucideIconProps

/**
 * `ArrowRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRight = forwardRef<ArrowRightProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowRightIcon} {...props} />
))
