import { forwardRef } from "@yamada-ui/core"
import { Rat as RatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RatProps = LucideIconProps

/**
 * `Rat` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rat = forwardRef<RatProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RatIcon} {...props} />
))
