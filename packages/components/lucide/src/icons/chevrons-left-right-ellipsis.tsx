import { forwardRef } from "@yamada-ui/core"
import { ChevronsLeftRightEllipsis as ChevronsLeftRightEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChevronsLeftRightEllipsisProps = LucideIconProps

/**
 * `ChevronsLeftRightEllipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftRightEllipsis = forwardRef<
  ChevronsLeftRightEllipsisProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={ChevronsLeftRightEllipsisIcon} {...props} />
))
