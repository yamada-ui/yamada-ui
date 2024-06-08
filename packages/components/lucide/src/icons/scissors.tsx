import { forwardRef } from "@yamada-ui/core"
import { Scissors as ScissorsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScissorsProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Scissors = forwardRef<ScissorsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScissorsIcon} {...props} />
))
