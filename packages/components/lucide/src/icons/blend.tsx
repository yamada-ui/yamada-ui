import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Blend as LucideBlendIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BlendIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BlendIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBlendIcon} {...props} />
))

/**
 * @deprecated Use `BlendIcon` instead.
 */
export const Blend = BlendIcon
