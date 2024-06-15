import { forwardRef } from "@yamada-ui/core"
import { ArrowDownAZ as ArrowDownAZIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownAZProps = LucideIconProps

/**
 * `ArrowDownAZ` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownAZ = forwardRef<ArrowDownAZProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowDownAZIcon} {...props} />
))
