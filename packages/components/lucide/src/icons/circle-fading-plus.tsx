import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CircleFadingPlus as OriginalCircleFadingPlus } from "lucide-react"

/**
 * `CircleFadingPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleFadingPlusIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalCircleFadingPlus} {...props} />,
)

/**
 * `CircleFadingPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleFadingPlusIcon` instead.
 */
export const CircleFadingPlus = CircleFadingPlusIcon
