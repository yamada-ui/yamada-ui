import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { LocateFixed as OriginalLocateFixed } from "lucide-react"

/**
 * `LocateFixedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LocateFixedIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalLocateFixed} {...props} />
))

/**
 * `LocateFixed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LocateFixedIcon` instead.
 */
export const LocateFixed = LocateFixedIcon
