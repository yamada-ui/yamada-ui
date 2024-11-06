import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BrainCircuit as LucideBrainCircuitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BrainCircuitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrainCircuitIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBrainCircuitIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BrainCircuitIcon` instead.
 */
export const BrainCircuit = BrainCircuitIcon
