import { forwardRef } from "@yamada-ui/core"
import { Frame as FrameIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FrameProps = LucideIconProps

/**
 * `Frame` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Frame = forwardRef<FrameProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FrameIcon} {...props} />
))
