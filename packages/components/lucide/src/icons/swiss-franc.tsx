import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SwissFranc as LucideSwissFrancIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SwissFrancIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwissFrancIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSwissFrancIcon} {...props} />,
)

/**
 * @deprecated Use `SwissFrancIcon` instead.
 */
export const SwissFranc = SwissFrancIcon
