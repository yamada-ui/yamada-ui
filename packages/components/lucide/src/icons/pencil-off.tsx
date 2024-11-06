import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PencilOff as LucidePencilOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PencilOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucidePencilOffIcon} {...props} />,
)

/**
 * @deprecated Use `PencilOffIcon` instead.
 */
export const PencilOff = PencilOffIcon
