import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalSpaceBetween as AlignHorizontalSpaceBetweenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignHorizontalSpaceBetweenProps = LucideIconProps

/**
 * `AlignHorizontalSpaceBetween` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalSpaceBetween = forwardRef<
  AlignHorizontalSpaceBetweenProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignHorizontalSpaceBetweenIcon} {...props} />
))
