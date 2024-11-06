import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SwitchCamera as LucideSwitchCameraIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SwitchCameraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwitchCameraIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSwitchCameraIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SwitchCameraIcon` instead.
 */
export const SwitchCamera = SwitchCameraIcon
