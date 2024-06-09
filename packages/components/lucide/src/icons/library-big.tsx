import { forwardRef } from "@yamada-ui/core"
import { LibraryBig as LibraryBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LibraryBigProps = LucideIconProps

/**
 * `LibraryBig` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LibraryBig = forwardRef<LibraryBigProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LibraryBigIcon} {...props} />
))
