import { forwardRef } from "@yamada-ui/core"
import { FileVideo as FileVideoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileVideoProps = LucideIconProps

/**
 * `FileVideo` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVideo = forwardRef<FileVideoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileVideoIcon} {...props} />
))
