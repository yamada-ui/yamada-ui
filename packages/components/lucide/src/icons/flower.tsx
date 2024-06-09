import { forwardRef } from "@yamada-ui/core"
import { Flower as FlowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlowerProps = LucideIconProps

/**
 * `Flower` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Flower = forwardRef<FlowerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FlowerIcon} {...props} />
))
