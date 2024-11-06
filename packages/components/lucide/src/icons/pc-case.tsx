import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PcCase as LucidePcCaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PcCaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PcCaseIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePcCaseIcon} {...props} />
))

/**
 * @deprecated Use `PcCaseIcon` instead.
 */
export const PcCase = PcCaseIcon
