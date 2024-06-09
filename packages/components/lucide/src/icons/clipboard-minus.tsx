import { forwardRef } from "@yamada-ui/core"
import { ClipboardMinus as ClipboardMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardMinusProps = LucideIconProps

/**
 * `ClipboardMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardMinus = forwardRef<ClipboardMinusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardMinusIcon} {...props} />,
)
