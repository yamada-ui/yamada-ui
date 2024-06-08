import { forwardRef } from "@yamada-ui/core"
import { CloudUpload as CloudUploadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudUploadProps = LucideIconProps

/**
 * `CloudUpload` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudUpload = forwardRef<CloudUploadProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudUploadIcon} {...props} />
))
