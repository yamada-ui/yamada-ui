import { forwardRef } from "@yamada-ui/core"
import { Braces as BracesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BracesProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Braces = forwardRef<BracesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BracesIcon} {...props} />
))
