import { forwardRef } from "@yamada-ui/core"
import { Lasso as LassoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LassoProps = LucideIconProps

/**
 * `Lasso` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Lasso = forwardRef<LassoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LassoIcon} {...props} />
))
