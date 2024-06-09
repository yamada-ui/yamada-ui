import { forwardRef } from "@yamada-ui/core"
import { CircleX as CircleXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleXProps = LucideIconProps

/**
 * `CircleX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleX = forwardRef<CircleXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleXIcon} {...props} />
))
