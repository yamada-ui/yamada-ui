import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardPlus as ClipboardPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPlus = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardPlusIcon} {...props} />,
)
