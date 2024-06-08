import { forwardRef } from "@yamada-ui/core"
import { UndoDot as UndoDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UndoDotProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UndoDot = forwardRef<UndoDotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UndoDotIcon} {...props} />
))
