import { forwardRef } from "@yamada-ui/core"
import { Gift as GiftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GiftProps = LucideIconProps

/**
 * `Gift` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Gift = forwardRef<GiftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GiftIcon} {...props} />
))
