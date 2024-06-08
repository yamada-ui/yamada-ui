import { forwardRef } from "@yamada-ui/core"
import { Compass as CompassIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CompassProps = LucideIconProps

/**
 * `Compass` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Compass = forwardRef<CompassProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CompassIcon} {...props} />
))
