import { forwardRef } from "@yamada-ui/core"
import { Files as FilesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FilesProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Files = forwardRef<FilesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FilesIcon} {...props} />
))
