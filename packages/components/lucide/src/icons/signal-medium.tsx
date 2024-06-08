import { forwardRef } from "@yamada-ui/core"
import { SignalMedium as SignalMediumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SignalMediumProps = LucideIconProps

/**
 * `SignalMedium` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalMedium = forwardRef<SignalMediumProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SignalMediumIcon} {...props} />,
)
