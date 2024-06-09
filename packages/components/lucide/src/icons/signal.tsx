import { forwardRef } from "@yamada-ui/core"
import { Signal as SignalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SignalProps = LucideIconProps

/**
 * `Signal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Signal = forwardRef<SignalProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SignalIcon} {...props} />
))
