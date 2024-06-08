import { forwardRef } from "@yamada-ui/core"
import { PillBottle as PillBottleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PillBottleProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PillBottle = forwardRef<PillBottleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PillBottleIcon} {...props} />
))
