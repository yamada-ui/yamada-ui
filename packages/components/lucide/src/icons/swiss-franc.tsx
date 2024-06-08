import { forwardRef } from "@yamada-ui/core"
import { SwissFranc as SwissFrancIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SwissFrancProps = LucideIconProps

/**
 * `SwissFranc` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwissFranc = forwardRef<SwissFrancProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SwissFrancIcon} {...props} />
))
