import { forwardRef } from "@yamada-ui/core"
import { FastForward as FastForwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FastForwardProps = LucideIconProps

/**
 * `FastForward` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FastForward = forwardRef<FastForwardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FastForwardIcon} {...props} />
))
