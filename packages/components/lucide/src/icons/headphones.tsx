import { forwardRef } from "@yamada-ui/core"
import { Headphones as HeadphonesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HeadphonesProps = LucideIconProps

/**
 * `Headphones` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Headphones = forwardRef<HeadphonesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HeadphonesIcon} {...props} />
))
