import { forwardRef } from "@yamada-ui/core"
import { ClipboardPlus as ClipboardPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardPlusProps = LucideIconProps

/**
 * `ClipboardPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPlus = forwardRef<ClipboardPlusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardPlusIcon} {...props} />,
)
