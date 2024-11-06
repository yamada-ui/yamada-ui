import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MicVocal as LucideMicVocalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MicVocalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicVocalIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMicVocalIcon} {...props} />
))

/**
 * @deprecated Use `MicVocalIcon` instead.
 */
export const MicVocal = MicVocalIcon
