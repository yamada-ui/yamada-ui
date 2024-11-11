import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { LoaderPinwheel as OriginalLoaderPinwheel } from "lucide-react"

/**
 * `LoaderPinwheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LoaderPinwheelIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalLoaderPinwheel} {...props} />
))

/**
 * `LoaderPinwheel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LoaderPinwheelIcon` instead.
 */
export const LoaderPinwheel = LoaderPinwheelIcon
