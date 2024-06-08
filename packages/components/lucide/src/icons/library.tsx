import { forwardRef } from "@yamada-ui/core"
import { Library as LibraryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LibraryProps = LucideIconProps

/**
 * `Library` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Library = forwardRef<LibraryProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LibraryIcon} {...props} />
))
