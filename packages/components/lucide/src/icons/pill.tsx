import { forwardRef } from "@yamada-ui/core"
import { Pill as PillIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PillProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pill = forwardRef<PillProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PillIcon} {...props} />
))
