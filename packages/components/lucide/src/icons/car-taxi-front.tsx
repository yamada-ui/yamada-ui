import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CarTaxiFront as OriginalCarTaxiFront } from "lucide-react"

/**
 * `CarTaxiFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarTaxiFrontIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalCarTaxiFront} {...props} />
))

/**
 * `CarTaxiFront` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CarTaxiFrontIcon` instead.
 */
export const CarTaxiFront = CarTaxiFrontIcon
