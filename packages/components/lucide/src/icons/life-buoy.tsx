import { forwardRef } from "@yamada-ui/core"
import { LifeBuoy as LifeBuoyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LifeBuoyProps = LucideIconProps

/**
 * `LifeBuoy` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LifeBuoy = forwardRef<LifeBuoyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LifeBuoyIcon} {...props} />
))
