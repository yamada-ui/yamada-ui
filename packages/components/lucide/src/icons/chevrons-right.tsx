import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsRight as ChevronsRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsRight = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChevronsRightIcon} {...props} />,
)
