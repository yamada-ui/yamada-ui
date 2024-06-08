import { forwardRef } from "@yamada-ui/core"
import { Flower as FlowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlowerProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Flower = forwardRef<FlowerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FlowerIcon} {...props} />
))
