import { forwardRef } from "@yamada-ui/core"
import { Worm as WormIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WormProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Worm = forwardRef<WormProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WormIcon} {...props} />
))
