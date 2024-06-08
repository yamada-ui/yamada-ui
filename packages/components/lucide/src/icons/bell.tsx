import { forwardRef } from "@yamada-ui/core"
import { Bell as BellIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BellProps = LucideIconProps

/**
 * `Bell` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bell = forwardRef<BellProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BellIcon} {...props} />
))
