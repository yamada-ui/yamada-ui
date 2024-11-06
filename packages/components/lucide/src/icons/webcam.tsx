import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Webcam as LucideWebcamIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WebcamIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WebcamIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWebcamIcon} {...props} />
))

/**
 * @deprecated Use `WebcamIcon` instead.
 */
export const Webcam = WebcamIcon
