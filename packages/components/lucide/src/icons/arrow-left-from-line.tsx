import { forwardRef } from "@yamada-ui/core"
import { ArrowLeftFromLine as ArrowLeftFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowLeftFromLineProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftFromLine = forwardRef<ArrowLeftFromLineProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ArrowLeftFromLineIcon} {...props} />
  ),
)
