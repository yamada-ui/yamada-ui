import { forwardRef } from "@yamada-ui/core"
import { Laptop as LaptopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LaptopProps = LucideIconProps

/**
 * `Laptop` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Laptop = forwardRef<LaptopProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LaptopIcon} {...props} />
))
