import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DnaOff as LucideDnaOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DnaOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DnaOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDnaOffIcon} {...props} />
))

/**
 * @deprecated Use `DnaOffIcon` instead.
 */
export const DnaOff = DnaOffIcon
