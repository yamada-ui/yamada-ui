import { forwardRef } from "@yamada-ui/core"
import { House as HouseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HouseProps = LucideIconProps

/**
 * `House` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const House = forwardRef<HouseProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HouseIcon} {...props} />
))
