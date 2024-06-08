import { forwardRef } from "@yamada-ui/core"
import { AudioLines as AudioLinesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AudioLinesProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AudioLines = forwardRef<AudioLinesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AudioLinesIcon} {...props} />
))
