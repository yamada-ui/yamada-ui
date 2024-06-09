import { forwardRef } from "@yamada-ui/core"
import { CirclePlay as CirclePlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CirclePlayProps = LucideIconProps

/**
 * `CirclePlay` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePlay = forwardRef<CirclePlayProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CirclePlayIcon} {...props} />
))
