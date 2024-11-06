import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Check as LucideCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CheckIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCheckIcon} {...props} />
))

/**
 * @deprecated Use `CheckIcon` instead.
 */
export const Check = CheckIcon
