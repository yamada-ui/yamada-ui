import { forwardRef } from "@yamada-ui/core"
import { Newspaper as NewspaperIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NewspaperProps = LucideIconProps

/**
 * `Newspaper` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Newspaper = forwardRef<NewspaperProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NewspaperIcon} {...props} />
))
