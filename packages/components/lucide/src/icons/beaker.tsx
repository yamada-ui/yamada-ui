import { forwardRef } from "@yamada-ui/core"
import { Beaker as BeakerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BeakerProps = LucideIconProps

/**
 * `Beaker` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Beaker = forwardRef<BeakerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BeakerIcon} {...props} />
))
