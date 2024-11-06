import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileStack as LucideFileStackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileStackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileStackIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileStackIcon} {...props} />,
)

/**
 * @deprecated Use `FileStackIcon` instead.
 */
export const FileStack = FileStackIcon
