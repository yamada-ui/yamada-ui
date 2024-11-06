import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookUp2 as LucideBookUp2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookUp2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookUp2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookUp2Icon} {...props} />
))

/**
 * @deprecated Use `BookUp2Icon` instead.
 */
export const BookUp2 = BookUp2Icon
