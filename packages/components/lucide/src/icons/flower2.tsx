import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Flower2 as LucideFlower2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Flower2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Flower2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFlower2Icon} {...props} />
))

/**
 * @deprecated Use `Flower2Icon` instead.
 */
export const Flower2 = Flower2Icon
