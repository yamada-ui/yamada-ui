import { forwardRef } from "@yamada-ui/core"
import { ArrowDownZA as ArrowDownZAIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownZAProps = LucideIconProps

/**
 * `ArrowDownZA` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownZA = forwardRef<ArrowDownZAProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowDownZAIcon} {...props} />
))
