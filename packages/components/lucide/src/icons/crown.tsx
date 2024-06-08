import { forwardRef } from "@yamada-ui/core"
import { Crown as CrownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CrownProps = LucideIconProps

/**
 * `Crown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Crown = forwardRef<CrownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CrownIcon} {...props} />
))
