import { forwardRef } from "@yamada-ui/core"
import { AlignStartHorizontal as AlignStartHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignStartHorizontalProps = LucideIconProps

/**
 * `AlignStartHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignStartHorizontal = forwardRef<
  AlignStartHorizontalProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignStartHorizontalIcon} {...props} />
))
