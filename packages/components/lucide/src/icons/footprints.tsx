import { forwardRef } from "@yamada-ui/core"
import { Footprints as FootprintsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FootprintsProps = LucideIconProps

/**
 * `Footprints` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Footprints = forwardRef<FootprintsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FootprintsIcon} {...props} />
))
