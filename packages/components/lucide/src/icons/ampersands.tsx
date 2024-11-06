import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ampersands as LucideAmpersandsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AmpersandsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AmpersandsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideAmpersandsIcon} {...props} />,
)

/**
 * @deprecated Use `AmpersandsIcon` instead.
 */
export const Ampersands = AmpersandsIcon
