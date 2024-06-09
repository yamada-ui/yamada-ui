import { forwardRef } from "@yamada-ui/core"
import { SquareDot as SquareDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareDotProps = LucideIconProps

/**
 * `SquareDot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDot = forwardRef<SquareDotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareDotIcon} {...props} />
))
