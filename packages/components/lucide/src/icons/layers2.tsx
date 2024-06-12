import { forwardRef } from "@yamada-ui/core"
import { Layers2 as Layers2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Layers2Props = LucideIconProps

/**
 * `Layers2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Layers2 = forwardRef<Layers2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Layers2Icon} {...props} />
))
