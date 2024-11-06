import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalDistributeCenter as LucideAlignVerticalDistributeCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignVerticalDistributeCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeCenterIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon
    ref={ref}
    as={LucideAlignVerticalDistributeCenterIcon}
    {...props}
  />
))

/**
 * @deprecated Use `AlignVerticalDistributeCenterIcon` instead.
 */
export const AlignVerticalDistributeCenter = AlignVerticalDistributeCenterIcon
