import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BrainCircuit as BrainCircuitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BrainCircuit` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrainCircuit = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BrainCircuitIcon} {...props} />
))
