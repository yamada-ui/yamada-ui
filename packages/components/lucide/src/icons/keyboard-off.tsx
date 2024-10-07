import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { KeyboardOff as KeyboardOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `KeyboardOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyboardOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={KeyboardOffIcon} {...props} />
))
