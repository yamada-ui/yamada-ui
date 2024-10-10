import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsLeft as ChevronsLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeft = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChevronsLeftIcon} {...props} />
))
