import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Newspaper as LucideNewspaperIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NewspaperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NewspaperIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideNewspaperIcon} {...props} />,
)

/**
 * @deprecated Use `NewspaperIcon` instead.
 */
export const Newspaper = NewspaperIcon
