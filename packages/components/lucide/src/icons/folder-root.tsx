import { forwardRef } from "@yamada-ui/core"
import { FolderRoot as FolderRootIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderRootProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderRoot = forwardRef<FolderRootProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderRootIcon} {...props} />
))
