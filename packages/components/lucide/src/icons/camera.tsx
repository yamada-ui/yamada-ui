import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Camera as LucideCameraIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CameraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CameraIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCameraIcon} {...props} />
))

/**
 * @deprecated Use `CameraIcon` instead.
 */
export const Camera = CameraIcon
