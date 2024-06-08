import { forwardRef } from "@yamada-ui/core"
import { SquarePen as SquarePenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquarePenProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePen = forwardRef<SquarePenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquarePenIcon} {...props} />
))
