import { forwardRef } from "@yamada-ui/core"
import { CircleDot as CircleDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleDotProps = LucideIconProps

/**
 * `CircleDot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDot = forwardRef<CircleDotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleDotIcon} {...props} />
))
