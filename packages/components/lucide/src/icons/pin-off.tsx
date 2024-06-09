import { forwardRef } from "@yamada-ui/core"
import { PinOff as PinOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PinOffProps = LucideIconProps

/**
 * `PinOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PinOff = forwardRef<PinOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PinOffIcon} {...props} />
))
