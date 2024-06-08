import { forwardRef } from "@yamada-ui/core"
import { ArrowDown as ArrowDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDown = forwardRef<ArrowDownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowDownIcon} {...props} />
))
