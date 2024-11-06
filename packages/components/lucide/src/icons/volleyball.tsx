import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Volleyball as LucideVolleyballIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VolleyballIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolleyballIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideVolleyballIcon} {...props} />,
)

/**
 * @deprecated Use `VolleyballIcon` instead.
 */
export const Volleyball = VolleyballIcon
