import { forwardRef } from "@yamada-ui/core"
import { AArrowUp as AArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AArrowUpProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AArrowUp = forwardRef<AArrowUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AArrowUpIcon} {...props} />
))
