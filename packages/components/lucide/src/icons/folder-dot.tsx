import { forwardRef } from "@yamada-ui/core"
import { FolderDot as FolderDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderDotProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderDot = forwardRef<FolderDotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderDotIcon} {...props} />
))
