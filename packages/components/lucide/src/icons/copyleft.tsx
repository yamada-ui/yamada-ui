import { forwardRef } from "@yamada-ui/core"
import { Copyleft as CopyleftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CopyleftProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Copyleft = forwardRef<CopyleftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CopyleftIcon} {...props} />
))
