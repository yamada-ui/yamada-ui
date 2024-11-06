import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListRestart as LucideListRestartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListRestartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListRestartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideListRestartIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ListRestartIcon` instead.
 */
export const ListRestart = ListRestartIcon
