import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CloudDrizzle as OriginalCloudDrizzle } from "lucide-react"

/**
 * `CloudDrizzleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudDrizzleIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalCloudDrizzle} {...props} />
))

/**
 * `CloudDrizzle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CloudDrizzleIcon` instead.
 */
export const CloudDrizzle = CloudDrizzleIcon
