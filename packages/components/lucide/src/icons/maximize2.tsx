import { forwardRef } from "@yamada-ui/core"
import { Maximize2 as Maximize2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Maximize2Props = LucideIconProps

/**
 * `Maximize2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Maximize2 = forwardRef<Maximize2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Maximize2Icon} {...props} />
))
