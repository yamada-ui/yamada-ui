import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Anvil as AnvilIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Anvil` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Anvil = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AnvilIcon} {...props} />
))
