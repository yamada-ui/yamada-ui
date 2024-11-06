import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Anvil as LucideAnvilIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AnvilIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AnvilIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAnvilIcon} {...props} />
))

/**
 * @deprecated Use `AnvilIcon` instead.
 */
export const Anvil = AnvilIcon
