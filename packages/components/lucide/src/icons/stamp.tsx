import { forwardRef } from "@yamada-ui/core"
import { Stamp as StampIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type StampProps = LucideIconProps

/**
 * `Stamp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Stamp = forwardRef<StampProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StampIcon} {...props} />
))
