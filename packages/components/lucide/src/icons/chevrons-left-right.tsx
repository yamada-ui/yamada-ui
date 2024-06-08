import { forwardRef } from "@yamada-ui/core"
import { ChevronsLeftRight as ChevronsLeftRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChevronsLeftRightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftRight = forwardRef<ChevronsLeftRightProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ChevronsLeftRightIcon} {...props} />
  ),
)
