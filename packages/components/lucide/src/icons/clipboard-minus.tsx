import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardMinus as ClipboardMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardMinus = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardMinusIcon} {...props} />,
)
