import { forwardRef } from "@yamada-ui/core"
import { FileAudio2 as FileAudio2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileAudio2Props = LucideIconProps

/**
 * `FileAudio2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileAudio2 = forwardRef<FileAudio2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileAudio2Icon} {...props} />
))
