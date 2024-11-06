import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SaveAll as LucideSaveAllIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SaveAllIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaveAllIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSaveAllIcon} {...props} />
))

/**
 * @deprecated Use `SaveAllIcon` instead.
 */
export const SaveAll = SaveAllIcon
