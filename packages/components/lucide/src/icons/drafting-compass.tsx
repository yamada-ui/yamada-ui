import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DraftingCompass as LucideDraftingCompassIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DraftingCompassIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DraftingCompassIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideDraftingCompassIcon} {...props} />
  ),
)

/**
 * @deprecated Use `DraftingCompassIcon` instead.
 */
export const DraftingCompass = DraftingCompassIcon
