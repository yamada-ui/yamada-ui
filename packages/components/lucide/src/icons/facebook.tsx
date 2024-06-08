import { forwardRef } from "@yamada-ui/core"
import { Facebook as FacebookIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FacebookProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Facebook = forwardRef<FacebookProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FacebookIcon} {...props} />
))
