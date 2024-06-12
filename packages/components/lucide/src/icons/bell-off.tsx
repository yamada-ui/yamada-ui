import { forwardRef } from "@yamada-ui/core"
import { BellOff as BellOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BellOffProps = LucideIconProps

/**
 * `BellOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellOff = forwardRef<BellOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BellOffIcon} {...props} />
))
