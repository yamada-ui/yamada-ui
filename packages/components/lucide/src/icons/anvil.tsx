import { forwardRef } from "@yamada-ui/core"
import { Anvil as AnvilIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AnvilProps = LucideIconProps

/**
 * `Anvil` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Anvil = forwardRef<AnvilProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AnvilIcon} {...props} />
))
