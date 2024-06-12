import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalDistributeStart as AlignVerticalDistributeStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignVerticalDistributeStartProps = LucideIconProps

/**
 * `AlignVerticalDistributeStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeStart = forwardRef<
  AlignVerticalDistributeStartProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignVerticalDistributeStartIcon} {...props} />
))
