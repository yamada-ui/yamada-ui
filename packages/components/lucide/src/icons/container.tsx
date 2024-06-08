import { forwardRef } from "@yamada-ui/core"
import { Container as ContainerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ContainerProps = LucideIconProps

/**
 * `Container` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Container = forwardRef<ContainerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ContainerIcon} {...props} />
))
