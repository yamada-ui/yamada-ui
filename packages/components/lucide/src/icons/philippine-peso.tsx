import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PhilippinePeso as OriginalPhilippinePeso } from "lucide-react"

/**
 * `PhilippinePesoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhilippinePesoIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalPhilippinePeso} {...props} />
))

/**
 * `PhilippinePeso` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PhilippinePesoIcon` instead.
 */
export const PhilippinePeso = PhilippinePesoIcon
