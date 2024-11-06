import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LaptopMinimal as LucideLaptopMinimalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LaptopMinimalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LaptopMinimalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLaptopMinimalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LaptopMinimalIcon` instead.
 */
export const LaptopMinimal = LaptopMinimalIcon
