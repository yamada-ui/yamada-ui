import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RadioReceiver as LucideRadioReceiverIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RadioReceiverIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadioReceiverIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRadioReceiverIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RadioReceiverIcon` instead.
 */
export const RadioReceiver = RadioReceiverIcon
