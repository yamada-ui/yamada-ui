import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Laptop as LucideLaptopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LaptopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LaptopIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLaptopIcon} {...props} />
))

/**
 * @deprecated Use `LaptopIcon` instead.
 */
export const Laptop = LaptopIcon
