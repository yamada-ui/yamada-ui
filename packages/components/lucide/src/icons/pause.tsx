import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pause as LucidePauseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PauseIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePauseIcon} {...props} />
))

/**
 * @deprecated Use `PauseIcon` instead.
 */
export const Pause = PauseIcon
