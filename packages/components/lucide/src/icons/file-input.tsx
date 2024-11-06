import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileInput as LucideFileInputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileInputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileInputIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileInputIcon} {...props} />,
)

/**
 * @deprecated Use `FileInputIcon` instead.
 */
export const FileInput = FileInputIcon
