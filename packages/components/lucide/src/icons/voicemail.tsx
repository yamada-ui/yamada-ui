import { forwardRef } from "@yamada-ui/core"
import { Voicemail as VoicemailIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VoicemailProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Voicemail = forwardRef<VoicemailProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VoicemailIcon} {...props} />
))
