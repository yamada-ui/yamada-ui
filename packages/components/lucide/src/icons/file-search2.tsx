import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileSearch2 as LucideFileSearch2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileSearch2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSearch2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileSearch2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `FileSearch2Icon` instead.
 */
export const FileSearch2 = FileSearch2Icon
