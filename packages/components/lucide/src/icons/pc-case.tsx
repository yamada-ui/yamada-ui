import { forwardRef } from "@yamada-ui/core"
import { PcCase as PcCaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PcCaseProps = LucideIconProps

/**
 * `PcCase` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PcCase = forwardRef<PcCaseProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PcCaseIcon} {...props} />
))
