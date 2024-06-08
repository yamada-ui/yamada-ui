import { forwardRef } from "@yamada-ui/core"
import { PackageSearch as PackageSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PackageSearchProps = LucideIconProps

/**
 * `PackageSearch` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageSearch = forwardRef<PackageSearchProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PackageSearchIcon} {...props} />,
)
