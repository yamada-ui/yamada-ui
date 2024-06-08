import { forwardRef } from "@yamada-ui/core"
import { WholeWord as WholeWordIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WholeWordProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WholeWord = forwardRef<WholeWordProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WholeWordIcon} {...props} />
))
