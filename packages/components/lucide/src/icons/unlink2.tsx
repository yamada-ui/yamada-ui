import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { Unlink2 as OriginalUnlink2 } from "lucide-react"

/**
 * `Unlink2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Unlink2Icon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalUnlink2} {...props} />
))

/**
 * `Unlink2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `Unlink2Icon` instead.
 */
export const Unlink2 = Unlink2Icon
