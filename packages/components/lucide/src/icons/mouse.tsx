import { forwardRef } from "@yamada-ui/core"
import { Mouse as MouseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MouseProps = LucideIconProps

/**
 * `Mouse` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Mouse = forwardRef<MouseProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MouseIcon} {...props} />
))
