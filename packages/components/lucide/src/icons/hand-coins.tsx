import { forwardRef } from "@yamada-ui/core"
import { HandCoins as HandCoinsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HandCoinsProps = LucideIconProps

/**
 * `HandCoins` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandCoins = forwardRef<HandCoinsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HandCoinsIcon} {...props} />
))
