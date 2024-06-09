import { forwardRef } from "@yamada-ui/core"
import { Fullscreen as FullscreenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FullscreenProps = LucideIconProps

/**
 * `Fullscreen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Fullscreen = forwardRef<FullscreenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FullscreenIcon} {...props} />
))
