import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalDistributeStart as LucideAlignHorizontalDistributeStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalDistributeStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeStartIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon
    ref={ref}
    as={LucideAlignHorizontalDistributeStartIcon}
    {...props}
  />
))

/**
 * @deprecated Use `AlignHorizontalDistributeStartIcon` instead.
 */
export const AlignHorizontalDistributeStart = AlignHorizontalDistributeStartIcon
