import { forwardRef } from "@yamada-ui/core"
import { FileBadge2 as FileBadge2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileBadge2Props = LucideIconProps

/**
 * `FileBadge2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileBadge2 = forwardRef<FileBadge2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileBadge2Icon} {...props} />
))
