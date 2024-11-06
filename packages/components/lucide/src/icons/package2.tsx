import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Package2 as LucidePackage2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Package2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Package2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePackage2Icon} {...props} />
))

/**
 * @deprecated Use `Package2Icon` instead.
 */
export const Package2 = Package2Icon
