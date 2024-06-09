import { forwardRef } from "@yamada-ui/core"
import { CableCar as CableCarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CableCarProps = LucideIconProps

/**
 * `CableCar` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CableCar = forwardRef<CableCarProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CableCarIcon} {...props} />
))
