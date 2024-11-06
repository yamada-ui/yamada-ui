import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Router as LucideRouterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RouterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RouterIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRouterIcon} {...props} />
))

/**
 * @deprecated Use `RouterIcon` instead.
 */
export const Router = RouterIcon
