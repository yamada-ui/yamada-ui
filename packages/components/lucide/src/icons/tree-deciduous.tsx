import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TreeDeciduous as TreeDeciduousIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TreeDeciduous` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreeDeciduous = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TreeDeciduousIcon} {...props} />,
)
