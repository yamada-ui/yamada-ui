import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Plus as LucidePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePlusIcon} {...props} />
))

/**
 * @deprecated Use `PlusIcon` instead.
 */
export const Plus = PlusIcon
