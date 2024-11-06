import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Save as LucideSaveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SaveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaveIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSaveIcon} {...props} />
))

/**
 * @deprecated Use `SaveIcon` instead.
 */
export const Save = SaveIcon
