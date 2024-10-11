import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalDistributeStart as AlignHorizontalDistributeStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalDistributeStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeStart = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignHorizontalDistributeStartIcon} {...props} />
))
