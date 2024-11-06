import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cherry as LucideCherryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CherryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CherryIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCherryIcon} {...props} />
))

/**
 * @deprecated Use `CherryIcon` instead.
 */
export const Cherry = CherryIcon
