import { forwardRef } from "@yamada-ui/core"
import { RadioReceiver as RadioReceiverIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RadioReceiverProps = LucideIconProps

/**
 * `RadioReceiver` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadioReceiver = forwardRef<RadioReceiverProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RadioReceiverIcon} {...props} />,
)
