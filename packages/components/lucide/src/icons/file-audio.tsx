import { forwardRef } from "@yamada-ui/core"
import { FileAudio as FileAudioIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileAudioProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileAudio = forwardRef<FileAudioProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileAudioIcon} {...props} />
))
