import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlameKindling as LucideFlameKindlingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlameKindlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlameKindlingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlameKindlingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FlameKindlingIcon` instead.
 */
export const FlameKindling = FlameKindlingIcon
