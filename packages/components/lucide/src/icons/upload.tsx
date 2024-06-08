import { forwardRef } from "@yamada-ui/core"
import { Upload as UploadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UploadProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Upload = forwardRef<UploadProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UploadIcon} {...props} />
))
