import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Columns2 as LucideColumns2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Columns2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Columns2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideColumns2Icon} {...props} />
))

/**
 * @deprecated Use `Columns2Icon` instead.
 */
export const Columns2 = Columns2Icon
