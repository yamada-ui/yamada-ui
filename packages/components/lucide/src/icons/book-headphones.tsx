import { forwardRef } from "@yamada-ui/core"
import { BookHeadphones as BookHeadphonesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookHeadphonesProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookHeadphones = forwardRef<BookHeadphonesProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BookHeadphonesIcon} {...props} />,
)
