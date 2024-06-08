import { forwardRef } from "@yamada-ui/core"
import { CircleCheck as CircleCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleCheckProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleCheck = forwardRef<CircleCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleCheckIcon} {...props} />
))
