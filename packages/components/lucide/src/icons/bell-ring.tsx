import { forwardRef } from "@yamada-ui/core"
import { BellRing as BellRingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BellRingProps = LucideIconProps

/**
 * `BellRing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellRing = forwardRef<BellRingProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BellRingIcon} {...props} />
))
