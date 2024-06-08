import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalJustifyStart as AlignVerticalJustifyStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignVerticalJustifyStartProps = LucideIconProps

/**
 * `AlignVerticalJustifyStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyStart = forwardRef<
  AlignVerticalJustifyStartProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignVerticalJustifyStartIcon} {...props} />
))
