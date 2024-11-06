import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Disc2 as LucideDisc2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Disc2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Disc2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDisc2Icon} {...props} />
))

/**
 * @deprecated Use `Disc2Icon` instead.
 */
export const Disc2 = Disc2Icon
