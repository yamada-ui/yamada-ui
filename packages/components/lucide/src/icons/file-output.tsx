import { forwardRef } from "@yamada-ui/core"
import { FileOutput as FileOutputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileOutputProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileOutput = forwardRef<FileOutputProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileOutputIcon} {...props} />
))
