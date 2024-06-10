import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalDistributeCenter as AlignVerticalDistributeCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignVerticalDistributeCenterProps = LucideIconProps

/**
 * `AlignVerticalDistributeCenter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeCenter = forwardRef<
  AlignVerticalDistributeCenterProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignVerticalDistributeCenterIcon} {...props} />
))
