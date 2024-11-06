import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileOutput as LucideFileOutputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileOutputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileOutputIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileOutputIcon} {...props} />,
)

/**
 * @deprecated Use `FileOutputIcon` instead.
 */
export const FileOutput = FileOutputIcon
