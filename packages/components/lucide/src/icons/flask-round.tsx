import { forwardRef } from "@yamada-ui/core"
import { FlaskRound as FlaskRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlaskRoundProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlaskRound = forwardRef<FlaskRoundProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FlaskRoundIcon} {...props} />
))
