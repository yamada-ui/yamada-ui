import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareSigma as LucideSquareSigmaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareSigmaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSigmaIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareSigmaIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareSigmaIcon` instead.
 */
export const SquareSigma = SquareSigmaIcon
