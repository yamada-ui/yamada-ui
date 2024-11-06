import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SendHorizontal as LucideSendHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SendHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SendHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSendHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SendHorizontalIcon` instead.
 */
export const SendHorizontal = SendHorizontalIcon
