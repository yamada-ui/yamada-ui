import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rabbit as LucideRabbitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RabbitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RabbitIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRabbitIcon} {...props} />
))

/**
 * @deprecated Use `RabbitIcon` instead.
 */
export const Rabbit = RabbitIcon
