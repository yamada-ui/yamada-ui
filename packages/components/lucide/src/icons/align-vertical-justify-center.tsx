import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalJustifyCenter as AlignVerticalJustifyCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignVerticalJustifyCenterProps = LucideIconProps

/**
 * `AlignVerticalJustifyCenter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyCenter = forwardRef<
  AlignVerticalJustifyCenterProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignVerticalJustifyCenterIcon} {...props} />
))
