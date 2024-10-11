import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignJustify as AlignJustifyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignJustify` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignJustify = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AlignJustifyIcon} {...props} />
))
