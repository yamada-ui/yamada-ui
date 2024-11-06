import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AtSign as LucideAtSignIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AtSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AtSignIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAtSignIcon} {...props} />
))

/**
 * @deprecated Use `AtSignIcon` instead.
 */
export const AtSign = AtSignIcon
