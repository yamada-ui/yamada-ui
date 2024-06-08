import { forwardRef } from "@yamada-ui/core"
import { AlignCenterHorizontal as AlignCenterHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignCenterHorizontalProps = LucideIconProps

/**
 * `AlignCenterHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterHorizontal = forwardRef<
  AlignCenterHorizontalProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignCenterHorizontalIcon} {...props} />
))
