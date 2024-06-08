import { forwardRef } from "@yamada-ui/core"
import { SquareCheckBig as SquareCheckBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareCheckBigProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareCheckBig = forwardRef<SquareCheckBigProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareCheckBigIcon} {...props} />,
)
