import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Calculator as LucideCalculatorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalculatorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalculatorIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCalculatorIcon} {...props} />,
)

/**
 * @deprecated Use `CalculatorIcon` instead.
 */
export const Calculator = CalculatorIcon
