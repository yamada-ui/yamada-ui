import { forwardRef } from "@yamada-ui/core"
import { Clock9 as Clock9Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock9Props = LucideIconProps

/**
 * `Clock9` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock9 = forwardRef<Clock9Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock9Icon} {...props} />
))
