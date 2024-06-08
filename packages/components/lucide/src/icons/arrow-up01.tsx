import { forwardRef } from "@yamada-ui/core"
import { ArrowUp01 as ArrowUp01Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUp01Props = LucideIconProps

/**
 * `ArrowUp01` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUp01 = forwardRef<ArrowUp01Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowUp01Icon} {...props} />
))
