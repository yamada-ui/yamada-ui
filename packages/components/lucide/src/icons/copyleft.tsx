import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Copyleft as LucideCopyleftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopyleftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyleftIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCopyleftIcon} {...props} />
))

/**
 * @deprecated Use `CopyleftIcon` instead.
 */
export const Copyleft = CopyleftIcon
