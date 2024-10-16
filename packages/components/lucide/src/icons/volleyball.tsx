import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Volleyball as VolleyballIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Volleyball` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Volleyball = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VolleyballIcon} {...props} />
))
