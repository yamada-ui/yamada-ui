import { forwardRef } from "@yamada-ui/core"
import { Minimize2 as Minimize2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Minimize2Props = LucideIconProps

/**
 * `Minimize2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Minimize2 = forwardRef<Minimize2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Minimize2Icon} {...props} />
))
