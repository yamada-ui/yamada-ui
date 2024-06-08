import { forwardRef } from "@yamada-ui/core"
import { FilePen as FilePenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FilePenProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePen = forwardRef<FilePenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FilePenIcon} {...props} />
))
