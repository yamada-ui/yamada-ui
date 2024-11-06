import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PencilLine as LucidePencilLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PencilLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucidePencilLineIcon} {...props} />,
)

/**
 * @deprecated Use `PencilLineIcon` instead.
 */
export const PencilLine = PencilLineIcon
