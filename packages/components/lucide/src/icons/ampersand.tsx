import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ampersand as LucideAmpersandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AmpersandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AmpersandIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideAmpersandIcon} {...props} />,
)

/**
 * @deprecated Use `AmpersandIcon` instead.
 */
export const Ampersand = AmpersandIcon
