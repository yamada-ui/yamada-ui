import { forwardRef } from "@yamada-ui/core"
import { ChevronsRightLeft as ChevronsRightLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChevronsRightLeftProps = LucideIconProps

/**
 * `ChevronsRightLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsRightLeft = forwardRef<ChevronsRightLeftProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ChevronsRightLeftIcon} {...props} />
  ),
)
