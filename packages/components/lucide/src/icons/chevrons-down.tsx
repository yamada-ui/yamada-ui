import { forwardRef } from "@yamada-ui/core"
import { ChevronsDown as ChevronsDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChevronsDownProps = LucideIconProps

/**
 * `ChevronsDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsDown = forwardRef<ChevronsDownProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChevronsDownIcon} {...props} />,
)
