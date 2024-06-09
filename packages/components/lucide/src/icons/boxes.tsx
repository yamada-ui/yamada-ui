import { forwardRef } from "@yamada-ui/core"
import { Boxes as BoxesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BoxesProps = LucideIconProps

/**
 * `Boxes` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Boxes = forwardRef<BoxesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BoxesIcon} {...props} />
))
