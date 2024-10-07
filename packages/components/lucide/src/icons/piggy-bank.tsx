import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PiggyBank as PiggyBankIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PiggyBank` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PiggyBank = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PiggyBankIcon} {...props} />
))
