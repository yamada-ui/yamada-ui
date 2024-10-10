import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EyeOff as EyeOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EyeOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EyeOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EyeOffIcon} {...props} />
))
