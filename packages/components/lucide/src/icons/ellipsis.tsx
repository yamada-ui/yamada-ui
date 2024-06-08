import { forwardRef } from "@yamada-ui/core"
import { Ellipsis as EllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EllipsisProps = LucideIconProps

/**
 * `Ellipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ellipsis = forwardRef<EllipsisProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EllipsisIcon} {...props} />
))
