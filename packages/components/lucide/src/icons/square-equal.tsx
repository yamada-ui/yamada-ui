import { forwardRef } from "@yamada-ui/core"
import { SquareEqual as SquareEqualIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareEqualProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareEqual = forwardRef<SquareEqualProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareEqualIcon} {...props} />
))
