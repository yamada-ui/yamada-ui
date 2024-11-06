import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListVideo as LucideListVideoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListVideoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListVideoIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideListVideoIcon} {...props} />,
)

/**
 * @deprecated Use `ListVideoIcon` instead.
 */
export const ListVideo = ListVideoIcon
