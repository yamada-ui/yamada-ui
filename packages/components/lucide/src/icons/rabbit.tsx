import { forwardRef } from "@yamada-ui/core"
import { Rabbit as RabbitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RabbitProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rabbit = forwardRef<RabbitProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RabbitIcon} {...props} />
))
