import { forwardRef } from "@yamada-ui/core"
import { FileImage as FileImageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileImageProps = LucideIconProps

/**
 * `FileImage` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileImage = forwardRef<FileImageProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileImageIcon} {...props} />
))
