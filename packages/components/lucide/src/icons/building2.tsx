import { forwardRef } from "@yamada-ui/core"
import { Building2 as Building2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Building2Props = LucideIconProps

/**
 * `Building2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Building2 = forwardRef<Building2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Building2Icon} {...props} />
))
