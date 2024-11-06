import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PenTool as LucidePenToolIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PenToolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenToolIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePenToolIcon} {...props} />
))

/**
 * @deprecated Use `PenToolIcon` instead.
 */
export const PenTool = PenToolIcon
