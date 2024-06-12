import { forwardRef } from "@yamada-ui/core"
import { BetweenHorizontalEnd as BetweenHorizontalEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BetweenHorizontalEndProps = LucideIconProps

/**
 * `BetweenHorizontalEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenHorizontalEnd = forwardRef<
  BetweenHorizontalEndProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={BetweenHorizontalEndIcon} {...props} />
))
