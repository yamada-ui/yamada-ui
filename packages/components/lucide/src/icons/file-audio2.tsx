import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileAudio2 as LucideFileAudio2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileAudio2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileAudio2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileAudio2Icon} {...props} />,
)

/**
 * @deprecated Use `FileAudio2Icon` instead.
 */
export const FileAudio2 = FileAudio2Icon
