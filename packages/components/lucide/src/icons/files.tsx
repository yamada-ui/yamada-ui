import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Files as LucideFilesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FilesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilesIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFilesIcon} {...props} />
))

/**
 * @deprecated Use `FilesIcon` instead.
 */
export const Files = FilesIcon
