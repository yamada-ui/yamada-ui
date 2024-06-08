import { forwardRef } from "@yamada-ui/core"
import { RussianRuble as RussianRubleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RussianRubleProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RussianRuble = forwardRef<RussianRubleProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RussianRubleIcon} {...props} />,
)
