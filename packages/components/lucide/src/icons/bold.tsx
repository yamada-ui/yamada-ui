import { forwardRef } from "@yamada-ui/core"
import { Bold as BoldIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BoldProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bold = forwardRef<BoldProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BoldIcon} {...props} />
))
