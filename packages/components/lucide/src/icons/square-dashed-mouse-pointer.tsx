import { forwardRef } from "@yamada-ui/core"
import { SquareDashedMousePointer as SquareDashedMousePointerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareDashedMousePointerProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedMousePointer = forwardRef<
  SquareDashedMousePointerProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={SquareDashedMousePointerIcon} {...props} />
))
