import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LampDesk as LucideLampDeskIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LampDeskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampDeskIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLampDeskIcon} {...props} />
))

/**
 * @deprecated Use `LampDeskIcon` instead.
 */
export const LampDesk = LampDeskIcon
