import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { X as XIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `X` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const X = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={XIcon} {...props} />
))
