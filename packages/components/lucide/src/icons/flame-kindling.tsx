import { forwardRef } from "@yamada-ui/core"
import { FlameKindling as FlameKindlingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlameKindlingProps = LucideIconProps

/**
 * `FlameKindling` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlameKindling = forwardRef<FlameKindlingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FlameKindlingIcon} {...props} />,
)
