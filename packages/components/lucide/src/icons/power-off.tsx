import { forwardRef } from "@yamada-ui/core"
import { PowerOff as PowerOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PowerOffProps = LucideIconProps

/**
 * `PowerOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PowerOff = forwardRef<PowerOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PowerOffIcon} {...props} />
))
