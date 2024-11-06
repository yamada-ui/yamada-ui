import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsRightLeft as LucideChevronsRightLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsRightLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsRightLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronsRightLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronsRightLeftIcon` instead.
 */
export const ChevronsRightLeft = ChevronsRightLeftIcon
