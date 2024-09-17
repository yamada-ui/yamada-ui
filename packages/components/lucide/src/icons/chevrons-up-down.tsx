import { forwardRef } from "@yamada-ui/core"
import { ChevronsUpDown as ChevronsUpDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `ChevronsUpDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsUpDown = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChevronsUpDownIcon} {...props} />,
)
