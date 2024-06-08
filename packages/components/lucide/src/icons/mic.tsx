import { forwardRef } from "@yamada-ui/core"
import { Mic as MicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MicProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Mic = forwardRef<MicProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MicIcon} {...props} />
))
