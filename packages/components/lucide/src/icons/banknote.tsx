import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Banknote as LucideBanknoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BanknoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BanknoteIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBanknoteIcon} {...props} />
))

/**
 * @deprecated Use `BanknoteIcon` instead.
 */
export const Banknote = BanknoteIcon
