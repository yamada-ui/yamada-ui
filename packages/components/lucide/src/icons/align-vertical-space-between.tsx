import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalSpaceBetween as AlignVerticalSpaceBetweenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignVerticalSpaceBetweenProps = LucideIconProps

/**
 * `AlignVerticalSpaceBetween` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalSpaceBetween = forwardRef<
  AlignVerticalSpaceBetweenProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignVerticalSpaceBetweenIcon} {...props} />
))
