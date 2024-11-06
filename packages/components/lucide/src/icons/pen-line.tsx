import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PenLine as LucidePenLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PenLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenLineIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePenLineIcon} {...props} />
))

/**
 * @deprecated Use `PenLineIcon` instead.
 */
export const PenLine = PenLineIcon
