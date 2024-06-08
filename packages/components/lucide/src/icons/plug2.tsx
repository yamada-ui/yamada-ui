import { forwardRef } from "@yamada-ui/core"
import { Plug2 as Plug2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Plug2Props = LucideIconProps

/**
 * `Plug2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Plug2 = forwardRef<Plug2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Plug2Icon} {...props} />
))
