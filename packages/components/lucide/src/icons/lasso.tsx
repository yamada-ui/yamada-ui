import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Lasso as LucideLassoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LassoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LassoIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLassoIcon} {...props} />
))

/**
 * @deprecated Use `LassoIcon` instead.
 */
export const Lasso = LassoIcon
