import { forwardRef } from "@yamada-ui/core"
import { SunDim as SunDimIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SunDimProps = LucideIconProps

/**
 * `SunDim` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunDim = forwardRef<SunDimProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SunDimIcon} {...props} />
))
