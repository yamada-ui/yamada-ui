import { forwardRef } from "@yamada-ui/core"
import { Film as FilmIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FilmProps = LucideIconProps

/**
 * `Film` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Film = forwardRef<FilmProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FilmIcon} {...props} />
))
