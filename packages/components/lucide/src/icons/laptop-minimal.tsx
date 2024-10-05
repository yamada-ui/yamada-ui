import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LaptopMinimal as LaptopMinimalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LaptopMinimal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LaptopMinimal = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LaptopMinimalIcon} {...props} />,
)
