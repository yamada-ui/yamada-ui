import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Voicemail as VoicemailIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Voicemail` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Voicemail = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VoicemailIcon} {...props} />
))
