import { forwardRef } from "@yamada-ui/core"
import { CircleArrowOutDownLeft as CircleArrowOutDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleArrowOutDownLeftProps = LucideIconProps

/**
 * `CircleArrowOutDownLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutDownLeft = forwardRef<
  CircleArrowOutDownLeftProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={CircleArrowOutDownLeftIcon} {...props} />
))
