import { forwardRef } from "@yamada-ui/core"
import { HandMetal as HandMetalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HandMetalProps = LucideIconProps

/**
 * `HandMetal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandMetal = forwardRef<HandMetalProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HandMetalIcon} {...props} />
))
