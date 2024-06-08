import { forwardRef } from "@yamada-ui/core"
import { BookOpenCheck as BookOpenCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookOpenCheckProps = LucideIconProps

/**
 * `BookOpenCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpenCheck = forwardRef<BookOpenCheckProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BookOpenCheckIcon} {...props} />,
)
