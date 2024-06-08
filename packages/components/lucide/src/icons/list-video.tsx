import { forwardRef } from "@yamada-ui/core"
import { ListVideo as ListVideoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListVideoProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListVideo = forwardRef<ListVideoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListVideoIcon} {...props} />
))
