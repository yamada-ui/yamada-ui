import { forwardRef } from "@yamada-ui/core"
import { SkipForward as SkipForwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SkipForwardProps = LucideIconProps

/**
 * `SkipForward` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SkipForward = forwardRef<SkipForwardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SkipForwardIcon} {...props} />
))
