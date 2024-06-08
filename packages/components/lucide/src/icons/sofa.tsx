import { forwardRef } from "@yamada-ui/core"
import { Sofa as SofaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SofaProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sofa = forwardRef<SofaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SofaIcon} {...props} />
))
