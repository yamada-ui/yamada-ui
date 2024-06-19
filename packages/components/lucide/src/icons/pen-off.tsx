import { forwardRef } from "@yamada-ui/core"
import { PenOff as PenOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PenOffProps = LucideIconProps

/**
 * `PenOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenOff = forwardRef<PenOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PenOffIcon} {...props} />
))
