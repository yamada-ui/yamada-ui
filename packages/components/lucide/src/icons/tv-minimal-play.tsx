import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TvMinimalPlay as TvMinimalPlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TvMinimalPlay` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TvMinimalPlay = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TvMinimalPlayIcon} {...props} />,
)
