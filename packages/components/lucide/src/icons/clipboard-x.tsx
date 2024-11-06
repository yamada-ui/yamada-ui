import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardX as LucideClipboardXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardXIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideClipboardXIcon} {...props} />,
)

/**
 * @deprecated Use `ClipboardXIcon` instead.
 */
export const ClipboardX = ClipboardXIcon
