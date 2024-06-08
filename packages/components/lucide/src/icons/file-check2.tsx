import { forwardRef } from "@yamada-ui/core"
import { FileCheck2 as FileCheck2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileCheck2Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCheck2 = forwardRef<FileCheck2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileCheck2Icon} {...props} />
))
