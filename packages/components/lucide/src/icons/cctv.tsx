import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cctv as LucideCctvIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CctvIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CctvIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCctvIcon} {...props} />
))

/**
 * @deprecated Use `CctvIcon` instead.
 */
export const Cctv = CctvIcon
