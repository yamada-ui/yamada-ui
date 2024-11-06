import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudUpload as LucideCloudUploadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudUploadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudUploadIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCloudUploadIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CloudUploadIcon` instead.
 */
export const CloudUpload = CloudUploadIcon
