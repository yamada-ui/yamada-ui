import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BellPlus as LucideBellPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BellPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellPlusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBellPlusIcon} {...props} />
))

/**
 * @deprecated Use `BellPlusIcon` instead.
 */
export const BellPlus = BellPlusIcon
