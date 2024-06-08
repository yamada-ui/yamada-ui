import { forwardRef } from "@yamada-ui/core"
import { Bolt as BoltIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BoltProps = LucideIconProps

/**
 * `Bolt` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bolt = forwardRef<BoltProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BoltIcon} {...props} />
))
