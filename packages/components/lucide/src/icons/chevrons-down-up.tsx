import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsDownUp as ChevronsDownUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsDownUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsDownUp = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChevronsDownUpIcon} {...props} />,
)
