import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalJustifyEnd as AlignHorizontalJustifyEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignHorizontalJustifyEndProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyEnd = forwardRef<
  AlignHorizontalJustifyEndProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignHorizontalJustifyEndIcon} {...props} />
))
