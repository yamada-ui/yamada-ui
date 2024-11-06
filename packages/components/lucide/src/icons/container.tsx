import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Container as LucideContainerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ContainerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ContainerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideContainerIcon} {...props} />,
)

/**
 * @deprecated Use `ContainerIcon` instead.
 */
export const Container = ContainerIcon
