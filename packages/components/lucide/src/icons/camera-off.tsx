import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CameraOff as CameraOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CameraOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CameraOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CameraOffIcon} {...props} />
))
