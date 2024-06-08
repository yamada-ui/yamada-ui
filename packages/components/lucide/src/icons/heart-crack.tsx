import { forwardRef } from "@yamada-ui/core"
import { HeartCrack as HeartCrackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HeartCrackProps = LucideIconProps

/**
 * `HeartCrack` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartCrack = forwardRef<HeartCrackProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HeartCrackIcon} {...props} />
))
