import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AudioWaveform as OriginalAudioWaveform } from "lucide-react"

/**
 * `AudioWaveformIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AudioWaveformIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalAudioWaveform} {...props} />
))

/**
 * `AudioWaveform` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AudioWaveformIcon` instead.
 */
export const AudioWaveform = AudioWaveformIcon
