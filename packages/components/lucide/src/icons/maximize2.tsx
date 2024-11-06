import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Maximize2 as LucideMaximize2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Maximize2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Maximize2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMaximize2Icon} {...props} />,
)

/**
 * @deprecated Use `Maximize2Icon` instead.
 */
export const Maximize2 = Maximize2Icon
