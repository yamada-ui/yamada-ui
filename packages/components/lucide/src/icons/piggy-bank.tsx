import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PiggyBank as LucidePiggyBankIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PiggyBankIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PiggyBankIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucidePiggyBankIcon} {...props} />,
)

/**
 * @deprecated Use `PiggyBankIcon` instead.
 */
export const PiggyBank = PiggyBankIcon
