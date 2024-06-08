import { forwardRef } from "@yamada-ui/core"
import { TvMinimalPlay as TvMinimalPlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TvMinimalPlayProps = LucideIconProps

/**
 * `TvMinimalPlay` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TvMinimalPlay = forwardRef<TvMinimalPlayProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TvMinimalPlayIcon} {...props} />,
)
