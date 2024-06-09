import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalDistributeEnd as AlignHorizontalDistributeEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignHorizontalDistributeEndProps = LucideIconProps

/**
 * `AlignHorizontalDistributeEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeEnd = forwardRef<
  AlignHorizontalDistributeEndProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignHorizontalDistributeEndIcon} {...props} />
))
