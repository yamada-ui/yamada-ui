import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Replace as LucideReplaceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReplaceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReplaceIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideReplaceIcon} {...props} />
))

/**
 * @deprecated Use `ReplaceIcon` instead.
 */
export const Replace = ReplaceIcon
