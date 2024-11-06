import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Fullscreen as LucideFullscreenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FullscreenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FullscreenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFullscreenIcon} {...props} />,
)

/**
 * @deprecated Use `FullscreenIcon` instead.
 */
export const Fullscreen = FullscreenIcon
