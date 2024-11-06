import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareLibrary as LucideSquareLibraryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareLibraryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareLibraryIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareLibraryIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareLibraryIcon` instead.
 */
export const SquareLibrary = SquareLibraryIcon
