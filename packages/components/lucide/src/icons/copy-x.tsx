import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CopyX as LucideCopyXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopyXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCopyXIcon} {...props} />
))

/**
 * @deprecated Use `CopyXIcon` instead.
 */
export const CopyX = CopyXIcon
