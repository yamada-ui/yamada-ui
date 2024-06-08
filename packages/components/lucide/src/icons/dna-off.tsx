import { forwardRef } from "@yamada-ui/core"
import { DnaOff as DnaOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DnaOffProps = LucideIconProps

/**
 * `DnaOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DnaOff = forwardRef<DnaOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DnaOffIcon} {...props} />
))
