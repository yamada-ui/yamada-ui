import { forwardRef } from "@yamada-ui/core"
import { Rows4 as Rows4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Rows4Props = LucideIconProps

/**
 * `Rows4` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rows4 = forwardRef<Rows4Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Rows4Icon} {...props} />
))
