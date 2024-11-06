import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tally1 as LucideTally1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Tally1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally1Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTally1Icon} {...props} />
))

/**
 * @deprecated Use `Tally1Icon` instead.
 */
export const Tally1 = Tally1Icon
