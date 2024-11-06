import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SaveOff as LucideSaveOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SaveOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaveOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSaveOffIcon} {...props} />
))

/**
 * @deprecated Use `SaveOffIcon` instead.
 */
export const SaveOff = SaveOffIcon
