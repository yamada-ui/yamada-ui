import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EyeClosed as EyeClosedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EyeClosed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EyeClosed = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EyeClosedIcon} {...props} />
))
