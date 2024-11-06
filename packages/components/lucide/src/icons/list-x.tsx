import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListX as LucideListXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideListXIcon} {...props} />
))

/**
 * @deprecated Use `ListXIcon` instead.
 */
export const ListX = ListXIcon
