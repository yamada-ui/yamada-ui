import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EyeClosed as LucideEyeClosedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EyeClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EyeClosedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideEyeClosedIcon} {...props} />,
)

/**
 * @deprecated Use `EyeClosedIcon` instead.
 */
export const EyeClosed = EyeClosedIcon
