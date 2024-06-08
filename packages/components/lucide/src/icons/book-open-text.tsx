import { forwardRef } from "@yamada-ui/core"
import { BookOpenText as BookOpenTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookOpenTextProps = LucideIconProps

/**
 * `BookOpenText` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpenText = forwardRef<BookOpenTextProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BookOpenTextIcon} {...props} />,
)
