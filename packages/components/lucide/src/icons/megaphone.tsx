import { forwardRef } from "@yamada-ui/core"
import { Megaphone as MegaphoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MegaphoneProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Megaphone = forwardRef<MegaphoneProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MegaphoneIcon} {...props} />
))
