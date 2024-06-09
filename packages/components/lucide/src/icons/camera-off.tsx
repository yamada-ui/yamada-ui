import { forwardRef } from "@yamada-ui/core"
import { CameraOff as CameraOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CameraOffProps = LucideIconProps

/**
 * `CameraOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CameraOff = forwardRef<CameraOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CameraOffIcon} {...props} />
))
