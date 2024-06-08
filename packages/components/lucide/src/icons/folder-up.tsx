import { forwardRef } from "@yamada-ui/core"
import { FolderUp as FolderUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderUpProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderUp = forwardRef<FolderUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderUpIcon} {...props} />
))
