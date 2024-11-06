import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Angry as LucideAngryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AngryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AngryIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAngryIcon} {...props} />
))

/**
 * @deprecated Use `AngryIcon` instead.
 */
export const Angry = AngryIcon
