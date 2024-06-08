import { forwardRef } from "@yamada-ui/core"
import { Hand as HandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HandProps = LucideIconProps

/**
 * `Hand` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Hand = forwardRef<HandProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HandIcon} {...props} />
))
