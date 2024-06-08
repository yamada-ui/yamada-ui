import { forwardRef } from "@yamada-ui/core"
import { Info as InfoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type InfoProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Info = forwardRef<InfoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={InfoIcon} {...props} />
))
