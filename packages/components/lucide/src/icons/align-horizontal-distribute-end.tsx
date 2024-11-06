import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalDistributeEnd as LucideAlignHorizontalDistributeEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalDistributeEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeEndIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon
    ref={ref}
    as={LucideAlignHorizontalDistributeEndIcon}
    {...props}
  />
))

/**
 * @deprecated Use `AlignHorizontalDistributeEndIcon` instead.
 */
export const AlignHorizontalDistributeEnd = AlignHorizontalDistributeEndIcon
