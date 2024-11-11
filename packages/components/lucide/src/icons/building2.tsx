import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { Building2 as OriginalBuilding2 } from "lucide-react"

/**
 * `Building2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Building2Icon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalBuilding2} {...props} />
))

/**
 * `Building2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `Building2Icon` instead.
 */
export const Building2 = Building2Icon
