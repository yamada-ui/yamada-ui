import { forwardRef } from "@yamada-ui/core"
import { VibrateOff as VibrateOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VibrateOffProps = LucideIconProps

/**
 * `VibrateOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VibrateOff = forwardRef<VibrateOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VibrateOffIcon} {...props} />
))
