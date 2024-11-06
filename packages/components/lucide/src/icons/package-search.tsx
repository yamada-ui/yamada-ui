import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PackageSearch as LucidePackageSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PackageSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageSearchIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePackageSearchIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PackageSearchIcon` instead.
 */
export const PackageSearch = PackageSearchIcon
