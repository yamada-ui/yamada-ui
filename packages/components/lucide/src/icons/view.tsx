import { forwardRef } from "@yamada-ui/core"
import { View as ViewIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ViewProps = LucideIconProps

/**
 * `View` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const View = forwardRef<ViewProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ViewIcon} {...props} />
))
