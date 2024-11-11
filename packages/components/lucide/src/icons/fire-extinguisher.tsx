import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { FireExtinguisher as OriginalFireExtinguisher } from "lucide-react"

/**
 * `FireExtinguisherIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FireExtinguisherIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalFireExtinguisher} {...props} />,
)

/**
 * `FireExtinguisher` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FireExtinguisherIcon` instead.
 */
export const FireExtinguisher = FireExtinguisherIcon
