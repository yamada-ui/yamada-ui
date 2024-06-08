import { forwardRef } from "@yamada-ui/core"
import { Link as LinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LinkProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Link = forwardRef<LinkProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LinkIcon} {...props} />
))
