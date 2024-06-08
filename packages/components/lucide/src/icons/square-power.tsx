import { forwardRef } from "@yamada-ui/core"
import { SquarePower as SquarePowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquarePowerProps = LucideIconProps

/**
 * `SquarePower` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePower = forwardRef<SquarePowerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquarePowerIcon} {...props} />
))
