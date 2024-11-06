import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PhilippinePeso as LucidePhilippinePesoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhilippinePesoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhilippinePesoIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePhilippinePesoIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PhilippinePesoIcon` instead.
 */
export const PhilippinePeso = PhilippinePesoIcon
