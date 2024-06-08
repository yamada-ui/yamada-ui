import { forwardRef } from "@yamada-ui/core"
import { Music2 as Music2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Music2Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Music2 = forwardRef<Music2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Music2Icon} {...props} />
))
