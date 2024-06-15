import { forwardRef } from "@yamada-ui/core"
import { Clover as CloverIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloverProps = LucideIconProps

/**
 * `Clover` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clover = forwardRef<CloverProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloverIcon} {...props} />
))
