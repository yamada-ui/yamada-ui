import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Castle as LucideCastleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CastleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CastleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCastleIcon} {...props} />
))

/**
 * @deprecated Use `CastleIcon` instead.
 */
export const Castle = CastleIcon
