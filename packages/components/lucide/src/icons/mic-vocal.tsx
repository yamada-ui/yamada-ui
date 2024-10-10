import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MicVocal as MicVocalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MicVocal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicVocal = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MicVocalIcon} {...props} />
))
