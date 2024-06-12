import { forwardRef } from "@yamada-ui/core"
import { Spade as SpadeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SpadeProps = LucideIconProps

/**
 * `Spade` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Spade = forwardRef<SpadeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SpadeIcon} {...props} />
))
