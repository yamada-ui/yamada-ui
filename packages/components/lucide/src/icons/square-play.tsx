import { forwardRef } from "@yamada-ui/core"
import { SquarePlay as SquarePlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquarePlayProps = LucideIconProps

/**
 * `SquarePlay` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePlay = forwardRef<SquarePlayProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquarePlayIcon} {...props} />
))
