import { forwardRef } from "@yamada-ui/core"
import { ChevronsRight as ChevronsRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChevronsRightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsRight = forwardRef<ChevronsRightProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChevronsRightIcon} {...props} />,
)
