import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalDistributeCenter as LucideAlignHorizontalDistributeCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalDistributeCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeCenterIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon
    ref={ref}
    as={LucideAlignHorizontalDistributeCenterIcon}
    {...props}
  />
))

/**
 * @deprecated Use `AlignHorizontalDistributeCenterIcon` instead.
 */
export const AlignHorizontalDistributeCenter =
  AlignHorizontalDistributeCenterIcon
