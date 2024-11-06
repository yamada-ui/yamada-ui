import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AudioWaveform as LucideAudioWaveformIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AudioWaveformIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AudioWaveformIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAudioWaveformIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AudioWaveformIcon` instead.
 */
export const AudioWaveform = AudioWaveformIcon
