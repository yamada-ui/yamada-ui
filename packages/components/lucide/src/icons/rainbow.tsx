import { forwardRef } from "@yamada-ui/core"
import { Rainbow as RainbowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RainbowProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rainbow = forwardRef<RainbowProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RainbowIcon} {...props} />
))
