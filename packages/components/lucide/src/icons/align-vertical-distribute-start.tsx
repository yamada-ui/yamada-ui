import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalDistributeStart as LucideAlignVerticalDistributeStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignVerticalDistributeStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeStartIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon
    ref={ref}
    as={LucideAlignVerticalDistributeStartIcon}
    {...props}
  />
))

/**
 * @deprecated Use `AlignVerticalDistributeStartIcon` instead.
 */
export const AlignVerticalDistributeStart = AlignVerticalDistributeStartIcon
