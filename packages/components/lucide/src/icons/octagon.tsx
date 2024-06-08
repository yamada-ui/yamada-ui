import { forwardRef } from "@yamada-ui/core"
import { Octagon as OctagonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type OctagonProps = LucideIconProps

/**
 * `Octagon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Octagon = forwardRef<OctagonProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OctagonIcon} {...props} />
))
