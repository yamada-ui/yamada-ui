import { forwardRef } from "@yamada-ui/core"
import { Church as ChurchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChurchProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Church = forwardRef<ChurchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChurchIcon} {...props} />
))
