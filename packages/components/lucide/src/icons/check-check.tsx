import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CheckCheck as CheckCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CheckCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CheckCheck = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CheckCheckIcon} {...props} />
))
