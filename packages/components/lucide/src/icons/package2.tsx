import { forwardRef } from "@yamada-ui/core"
import { Package2 as Package2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Package2Props = LucideIconProps

/**
 * `Package2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Package2 = forwardRef<Package2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Package2Icon} {...props} />
))
