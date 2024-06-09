import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalJustifyStart as AlignHorizontalJustifyStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignHorizontalJustifyStartProps = LucideIconProps

/**
 * `AlignHorizontalJustifyStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyStart = forwardRef<
  AlignHorizontalJustifyStartProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignHorizontalJustifyStartIcon} {...props} />
))
