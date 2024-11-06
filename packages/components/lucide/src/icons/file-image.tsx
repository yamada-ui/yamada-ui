import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileImage as LucideFileImageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileImageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileImageIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileImageIcon} {...props} />,
)

/**
 * @deprecated Use `FileImageIcon` instead.
 */
export const FileImage = FileImageIcon
