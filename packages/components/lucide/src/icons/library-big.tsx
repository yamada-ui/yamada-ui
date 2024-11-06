import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LibraryBig as LucideLibraryBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LibraryBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LibraryBigIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideLibraryBigIcon} {...props} />,
)

/**
 * @deprecated Use `LibraryBigIcon` instead.
 */
export const LibraryBig = LibraryBigIcon
