import { forwardRef } from "@yamada-ui/core"
import { FlaskConical as FlaskConicalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlaskConicalProps = LucideIconProps

/**
 * `FlaskConical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlaskConical = forwardRef<FlaskConicalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FlaskConicalIcon} {...props} />,
)
