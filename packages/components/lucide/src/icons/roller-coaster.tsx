import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RollerCoaster as RollerCoasterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RollerCoaster` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RollerCoaster = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RollerCoasterIcon} {...props} />,
)
