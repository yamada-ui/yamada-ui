import { forwardRef } from "@yamada-ui/core"
import { CheckCheck as CheckCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CheckCheckProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CheckCheck = forwardRef<CheckCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CheckCheckIcon} {...props} />
))
