import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Library as LucideLibraryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LibraryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LibraryIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLibraryIcon} {...props} />
))

/**
 * @deprecated Use `LibraryIcon` instead.
 */
export const Library = LibraryIcon
