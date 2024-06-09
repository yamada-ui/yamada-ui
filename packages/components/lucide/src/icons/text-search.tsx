import { forwardRef } from "@yamada-ui/core"
import { TextSearch as TextSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TextSearchProps = LucideIconProps

/**
 * `TextSearch` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextSearch = forwardRef<TextSearchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TextSearchIcon} {...props} />
))
