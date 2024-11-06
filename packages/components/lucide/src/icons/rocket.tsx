import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rocket as LucideRocketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RocketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RocketIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRocketIcon} {...props} />
))

/**
 * @deprecated Use `RocketIcon` instead.
 */
export const Rocket = RocketIcon
