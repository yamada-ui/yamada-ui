import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Copy as LucideCopyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCopyIcon} {...props} />
))

/**
 * @deprecated Use `CopyIcon` instead.
 */
export const Copy = CopyIcon
