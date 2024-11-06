import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Origami as LucideOrigamiIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OrigamiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OrigamiIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideOrigamiIcon} {...props} />
))

/**
 * @deprecated Use `OrigamiIcon` instead.
 */
export const Origami = OrigamiIcon
