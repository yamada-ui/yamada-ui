import { forwardRef } from "@yamada-ui/core"
import { Heading1 as Heading1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Heading1Props = LucideIconProps

/**
 * `Heading1` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading1 = forwardRef<Heading1Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Heading1Icon} {...props} />
))
