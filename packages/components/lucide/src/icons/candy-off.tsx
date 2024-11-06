import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CandyOff as LucideCandyOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CandyOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CandyOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCandyOffIcon} {...props} />
))

/**
 * @deprecated Use `CandyOffIcon` instead.
 */
export const CandyOff = CandyOffIcon
