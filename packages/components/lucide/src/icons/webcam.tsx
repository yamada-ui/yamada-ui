import { forwardRef } from "@yamada-ui/core"
import { Webcam as WebcamIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WebcamProps = LucideIconProps

/**
 * `Webcam` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Webcam = forwardRef<WebcamProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WebcamIcon} {...props} />
))
