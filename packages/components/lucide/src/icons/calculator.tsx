import { forwardRef } from "@yamada-ui/core"
import { Calculator as CalculatorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalculatorProps = LucideIconProps

/**
 * `Calculator` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Calculator = forwardRef<CalculatorProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CalculatorIcon} {...props} />
))
