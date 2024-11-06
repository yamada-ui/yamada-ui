import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Upload as LucideUploadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UploadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UploadIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUploadIcon} {...props} />
))

/**
 * @deprecated Use `UploadIcon` instead.
 */
export const Upload = UploadIcon
