import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Radio as LucideRadioIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RadioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadioIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRadioIcon} {...props} />
))

/**
 * @deprecated Use `RadioIcon` instead.
 */
export const Radio = RadioIcon
