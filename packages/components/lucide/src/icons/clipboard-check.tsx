import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardCheck as LucideClipboardCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClipboardCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClipboardCheckIcon` instead.
 */
export const ClipboardCheck = ClipboardCheckIcon
