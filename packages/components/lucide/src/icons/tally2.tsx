import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tally2 as LucideTally2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Tally2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTally2Icon} {...props} />
))

/**
 * @deprecated Use `Tally2Icon` instead.
 */
export const Tally2 = Tally2Icon
