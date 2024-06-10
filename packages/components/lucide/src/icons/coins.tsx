import { forwardRef } from "@yamada-ui/core"
import { Coins as CoinsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CoinsProps = LucideIconProps

/**
 * `Coins` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Coins = forwardRef<CoinsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CoinsIcon} {...props} />
))
