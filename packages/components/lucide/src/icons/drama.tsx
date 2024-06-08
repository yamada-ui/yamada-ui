import { forwardRef } from "@yamada-ui/core"
import { Drama as DramaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DramaProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Drama = forwardRef<DramaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DramaIcon} {...props} />
))
