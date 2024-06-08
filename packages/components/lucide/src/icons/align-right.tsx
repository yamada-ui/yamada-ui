import { forwardRef } from "@yamada-ui/core"
import { AlignRight as AlignRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignRightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignRight = forwardRef<AlignRightProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AlignRightIcon} {...props} />
))
