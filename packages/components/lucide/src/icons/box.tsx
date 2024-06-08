import { forwardRef } from "@yamada-ui/core"
import { Box as BoxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BoxProps = LucideIconProps

/**
 * `Box` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Box = forwardRef<BoxProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BoxIcon} {...props} />
))
