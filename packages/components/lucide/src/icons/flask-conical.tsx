import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlaskConical as LucideFlaskConicalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlaskConicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlaskConicalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlaskConicalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FlaskConicalIcon` instead.
 */
export const FlaskConical = FlaskConicalIcon
