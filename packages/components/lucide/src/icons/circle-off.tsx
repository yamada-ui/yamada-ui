import { forwardRef } from "@yamada-ui/core"
import { CircleOff as CircleOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleOffProps = LucideIconProps

/**
 * `CircleOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleOff = forwardRef<CircleOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleOffIcon} {...props} />
))
