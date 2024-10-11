import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SearchCheck as SearchCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SearchCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchCheck = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SearchCheckIcon} {...props} />
))
