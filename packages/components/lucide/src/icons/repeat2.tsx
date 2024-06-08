import { forwardRef } from "@yamada-ui/core"
import { Repeat2 as Repeat2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Repeat2Props = LucideIconProps

/**
 * `Repeat2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Repeat2 = forwardRef<Repeat2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Repeat2Icon} {...props} />
))
