import { forwardRef } from "@yamada-ui/core"
import { MoveDiagonal2 as MoveDiagonal2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveDiagonal2Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDiagonal2 = forwardRef<MoveDiagonal2Props, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MoveDiagonal2Icon} {...props} />,
)
