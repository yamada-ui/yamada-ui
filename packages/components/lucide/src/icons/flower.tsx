import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Flower as LucideFlowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlowerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFlowerIcon} {...props} />
))

/**
 * @deprecated Use `FlowerIcon` instead.
 */
export const Flower = FlowerIcon
