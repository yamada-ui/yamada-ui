import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BookOpenCheck as OriginalBookOpenCheck } from "lucide-react"

/**
 * `BookOpenCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpenCheckIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalBookOpenCheck} {...props} />
))

/**
 * `BookOpenCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BookOpenCheckIcon` instead.
 */
export const BookOpenCheck = BookOpenCheckIcon
