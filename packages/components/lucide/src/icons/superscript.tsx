import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Superscript as LucideSuperscriptIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SuperscriptIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SuperscriptIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSuperscriptIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SuperscriptIcon` instead.
 */
export const Superscript = SuperscriptIcon
