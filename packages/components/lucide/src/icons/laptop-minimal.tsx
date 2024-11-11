import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { LaptopMinimal as OriginalLaptopMinimal } from "lucide-react"

/**
 * `LaptopMinimalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LaptopMinimalIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalLaptopMinimal} {...props} />
))

/**
 * `LaptopMinimal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LaptopMinimalIcon` instead.
 */
export const LaptopMinimal = LaptopMinimalIcon
