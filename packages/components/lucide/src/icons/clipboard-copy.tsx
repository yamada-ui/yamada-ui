import { forwardRef } from "@yamada-ui/core"
import { ClipboardCopy as ClipboardCopyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardCopyProps = LucideIconProps

/**
 * `ClipboardCopy` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardCopy = forwardRef<ClipboardCopyProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardCopyIcon} {...props} />,
)
