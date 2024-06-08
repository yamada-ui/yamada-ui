import { forwardRef } from "@yamada-ui/core"
import { FilePenLine as FilePenLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FilePenLineProps = LucideIconProps

/**
 * `FilePenLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePenLine = forwardRef<FilePenLineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FilePenLineIcon} {...props} />
))
