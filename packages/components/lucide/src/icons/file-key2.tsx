import { forwardRef } from "@yamada-ui/core"
import { FileKey2 as FileKey2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileKey2Props = LucideIconProps

/**
 * `FileKey2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileKey2 = forwardRef<FileKey2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileKey2Icon} {...props} />
))
