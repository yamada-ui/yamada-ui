import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bath as LucideBathIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BathIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BathIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBathIcon} {...props} />
))

/**
 * @deprecated Use `BathIcon` instead.
 */
export const Bath = BathIcon
