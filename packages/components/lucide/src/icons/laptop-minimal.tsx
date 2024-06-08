import { forwardRef } from "@yamada-ui/core"
import { LaptopMinimal as LaptopMinimalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LaptopMinimalProps = LucideIconProps

/**
 * `LaptopMinimal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LaptopMinimal = forwardRef<LaptopMinimalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LaptopMinimalIcon} {...props} />,
)
