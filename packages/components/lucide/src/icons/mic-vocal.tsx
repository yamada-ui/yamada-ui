import { forwardRef } from "@yamada-ui/core"
import { MicVocal as MicVocalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MicVocalProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicVocal = forwardRef<MicVocalProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MicVocalIcon} {...props} />
))
