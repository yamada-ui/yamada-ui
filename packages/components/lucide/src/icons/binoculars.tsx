import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Binoculars as LucideBinocularsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BinocularsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BinocularsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBinocularsIcon} {...props} />,
)

/**
 * @deprecated Use `BinocularsIcon` instead.
 */
export const Binoculars = BinocularsIcon
