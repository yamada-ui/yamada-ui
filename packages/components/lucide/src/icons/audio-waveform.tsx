import { forwardRef } from "@yamada-ui/core"
import { AudioWaveform as AudioWaveformIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AudioWaveformProps = LucideIconProps

/**
 * `AudioWaveform` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AudioWaveform = forwardRef<AudioWaveformProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={AudioWaveformIcon} {...props} />,
)
