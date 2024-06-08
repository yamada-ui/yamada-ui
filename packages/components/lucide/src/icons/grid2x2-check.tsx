import { forwardRef } from "@yamada-ui/core"
import { Grid2x2Check as Grid2x2CheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Grid2x2CheckProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2Check = forwardRef<Grid2x2CheckProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={Grid2x2CheckIcon} {...props} />,
)
