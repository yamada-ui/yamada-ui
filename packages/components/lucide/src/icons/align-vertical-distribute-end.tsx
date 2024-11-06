import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalDistributeEnd as LucideAlignVerticalDistributeEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignVerticalDistributeEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeEndIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={LucideAlignVerticalDistributeEndIcon} {...props} />
))

/**
 * @deprecated Use `AlignVerticalDistributeEndIcon` instead.
 */
export const AlignVerticalDistributeEnd = AlignVerticalDistributeEndIcon
