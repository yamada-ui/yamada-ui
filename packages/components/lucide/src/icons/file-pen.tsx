import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FilePen as LucideFilePenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FilePenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePenIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFilePenIcon} {...props} />
))

/**
 * @deprecated Use `FilePenIcon` instead.
 */
export const FilePen = FilePenIcon
