import { forwardRef } from "@yamada-ui/core"
import { SquareCode as SquareCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareCodeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareCode = forwardRef<SquareCodeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareCodeIcon} {...props} />
))
