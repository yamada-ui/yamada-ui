import { forwardRef } from "@yamada-ui/core"
import { Option as OptionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type OptionProps = LucideIconProps

/**
 * `Option` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Option = forwardRef<OptionProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OptionIcon} {...props} />
))
