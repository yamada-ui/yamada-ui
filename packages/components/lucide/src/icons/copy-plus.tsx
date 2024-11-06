import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CopyPlus as LucideCopyPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopyPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyPlusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCopyPlusIcon} {...props} />
))

/**
 * @deprecated Use `CopyPlusIcon` instead.
 */
export const CopyPlus = CopyPlusIcon
