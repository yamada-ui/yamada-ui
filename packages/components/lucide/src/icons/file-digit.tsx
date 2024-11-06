import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileDigit as LucideFileDigitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileDigitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileDigitIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileDigitIcon} {...props} />,
)

/**
 * @deprecated Use `FileDigitIcon` instead.
 */
export const FileDigit = FileDigitIcon
