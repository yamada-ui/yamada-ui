import { forwardRef } from "@yamada-ui/core"
import { Rows2 as Rows2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Rows2Props = LucideIconProps

/**
 * `Rows2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rows2 = forwardRef<Rows2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Rows2Icon} {...props} />
))
