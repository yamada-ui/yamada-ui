import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Minimize2 as LucideMinimize2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Minimize2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Minimize2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMinimize2Icon} {...props} />,
)

/**
 * @deprecated Use `Minimize2Icon` instead.
 */
export const Minimize2 = Minimize2Icon
