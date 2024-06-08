import { forwardRef } from "@yamada-ui/core"
import { FileSliders as FileSlidersIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileSlidersProps = LucideIconProps

/**
 * `FileSliders` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSliders = forwardRef<FileSlidersProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileSlidersIcon} {...props} />
))
