import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FilePenLine as LucideFilePenLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FilePenLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePenLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFilePenLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FilePenLineIcon` instead.
 */
export const FilePenLine = FilePenLineIcon
