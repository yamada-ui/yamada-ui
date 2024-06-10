import { forwardRef } from "@yamada-ui/core"
import { ScissorsLineDashed as ScissorsLineDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScissorsLineDashedProps = LucideIconProps

/**
 * `ScissorsLineDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScissorsLineDashed = forwardRef<ScissorsLineDashedProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ScissorsLineDashedIcon} {...props} />
  ),
)
