import { forwardRef } from "@yamada-ui/core"
import { FolderX as FolderXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderXProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderX = forwardRef<FolderXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderXIcon} {...props} />
))
