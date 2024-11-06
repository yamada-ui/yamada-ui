import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileBadge2 as LucideFileBadge2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileBadge2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileBadge2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileBadge2Icon} {...props} />,
)

/**
 * @deprecated Use `FileBadge2Icon` instead.
 */
export const FileBadge2 = FileBadge2Icon
