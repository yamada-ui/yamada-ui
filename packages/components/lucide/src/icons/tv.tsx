import { forwardRef } from "@yamada-ui/core"
import { Tv as TvIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TvProps = LucideIconProps

/**
 * `Tv` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tv = forwardRef<TvProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TvIcon} {...props} />
))
