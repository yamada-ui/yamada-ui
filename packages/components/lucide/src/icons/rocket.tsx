import { forwardRef } from "@yamada-ui/core"
import { Rocket as RocketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RocketProps = LucideIconProps

/**
 * `Rocket` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rocket = forwardRef<RocketProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RocketIcon} {...props} />
))
