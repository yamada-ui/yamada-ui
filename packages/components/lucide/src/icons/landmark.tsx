import { forwardRef } from "@yamada-ui/core"
import { Landmark as LandmarkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LandmarkProps = LucideIconProps

/**
 * `Landmark` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Landmark = forwardRef<LandmarkProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LandmarkIcon} {...props} />
))
