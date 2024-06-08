import { forwardRef } from "@yamada-ui/core"
import { BotOff as BotOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BotOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BotOff = forwardRef<BotOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BotOffIcon} {...props} />
))
