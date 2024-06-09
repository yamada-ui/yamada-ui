import { forwardRef } from "@yamada-ui/core"
import { Tractor as TractorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TractorProps = LucideIconProps

/**
 * `Tractor` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tractor = forwardRef<TractorProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TractorIcon} {...props} />
))
