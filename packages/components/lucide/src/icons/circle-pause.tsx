import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CirclePause as CirclePauseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CirclePause` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePause = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CirclePauseIcon} {...props} />
))
