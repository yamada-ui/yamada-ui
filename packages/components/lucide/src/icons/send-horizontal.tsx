import { forwardRef } from "@yamada-ui/core"
import { SendHorizontal as SendHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SendHorizontalProps = LucideIconProps

/**
 * `SendHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SendHorizontal = forwardRef<SendHorizontalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SendHorizontalIcon} {...props} />,
)
