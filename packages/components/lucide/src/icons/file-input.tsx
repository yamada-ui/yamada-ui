import { forwardRef } from "@yamada-ui/core"
import { FileInput as FileInputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileInputProps = LucideIconProps

/**
 * `FileInput` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileInput = forwardRef<FileInputProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileInputIcon} {...props} />
))
