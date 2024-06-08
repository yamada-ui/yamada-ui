import { forwardRef } from "@yamada-ui/core"
import { Luggage as LuggageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LuggageProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Luggage = forwardRef<LuggageProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LuggageIcon} {...props} />
))
