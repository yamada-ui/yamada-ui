import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileMinus as LucideFileMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileMinusIcon} {...props} />,
)

/**
 * @deprecated Use `FileMinusIcon` instead.
 */
export const FileMinus = FileMinusIcon
