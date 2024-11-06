import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PackageMinus as LucidePackageMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PackageMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePackageMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PackageMinusIcon` instead.
 */
export const PackageMinus = PackageMinusIcon
