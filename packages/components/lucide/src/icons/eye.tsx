import { forwardRef } from "@yamada-ui/core"
import { Eye as EyeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EyeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Eye = forwardRef<EyeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EyeIcon} {...props} />
))
