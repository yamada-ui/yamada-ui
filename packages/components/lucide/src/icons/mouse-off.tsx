import { forwardRef } from "@yamada-ui/core"
import { MouseOff as MouseOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MouseOffProps = LucideIconProps

/**
 * `MouseOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MouseOff = forwardRef<MouseOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MouseOffIcon} {...props} />
))
