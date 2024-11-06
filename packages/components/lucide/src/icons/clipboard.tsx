import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clipboard as LucideClipboardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideClipboardIcon} {...props} />,
)

/**
 * @deprecated Use `ClipboardIcon` instead.
 */
export const Clipboard = ClipboardIcon
