import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Signpost as LucideSignpostIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignpostIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignpostIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSignpostIcon} {...props} />
))

/**
 * @deprecated Use `SignpostIcon` instead.
 */
export const Signpost = SignpostIcon
