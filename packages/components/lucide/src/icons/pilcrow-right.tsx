import { forwardRef } from "@yamada-ui/core"
import { PilcrowRight as PilcrowRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PilcrowRightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowRight = forwardRef<PilcrowRightProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PilcrowRightIcon} {...props} />,
)
