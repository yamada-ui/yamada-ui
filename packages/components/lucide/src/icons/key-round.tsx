import { forwardRef } from "@yamada-ui/core"
import { KeyRound as KeyRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type KeyRoundProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyRound = forwardRef<KeyRoundProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={KeyRoundIcon} {...props} />
))
