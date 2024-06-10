import { forwardRef } from "@yamada-ui/core"
import { Sailboat as SailboatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SailboatProps = LucideIconProps

/**
 * `Sailboat` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sailboat = forwardRef<SailboatProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SailboatIcon} {...props} />
))
