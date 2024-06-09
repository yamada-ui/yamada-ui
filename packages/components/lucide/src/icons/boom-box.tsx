import { forwardRef } from "@yamada-ui/core"
import { BoomBox as BoomBoxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BoomBoxProps = LucideIconProps

/**
 * `BoomBox` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoomBox = forwardRef<BoomBoxProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BoomBoxIcon} {...props} />
))
