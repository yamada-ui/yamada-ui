import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { Heading2 as OriginalHeading2 } from "lucide-react"

/**
 * `Heading2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading2Icon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalHeading2} {...props} />
))

/**
 * `Heading2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `Heading2Icon` instead.
 */
export const Heading2 = Heading2Icon
