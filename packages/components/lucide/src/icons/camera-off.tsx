import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CameraOff as LucideCameraOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CameraOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CameraOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCameraOffIcon} {...props} />,
)

/**
 * @deprecated Use `CameraOffIcon` instead.
 */
export const CameraOff = CameraOffIcon
