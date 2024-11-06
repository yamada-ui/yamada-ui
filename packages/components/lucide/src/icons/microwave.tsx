import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Microwave as LucideMicrowaveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MicrowaveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicrowaveIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMicrowaveIcon} {...props} />,
)

/**
 * @deprecated Use `MicrowaveIcon` instead.
 */
export const Microwave = MicrowaveIcon
