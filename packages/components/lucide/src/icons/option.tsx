import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Option as LucideOptionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OptionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OptionIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideOptionIcon} {...props} />
))

/**
 * @deprecated Use `OptionIcon` instead.
 */
export const Option = OptionIcon
