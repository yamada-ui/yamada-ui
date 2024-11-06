import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PackageOpen as LucidePackageOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PackageOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageOpenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePackageOpenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PackageOpenIcon` instead.
 */
export const PackageOpen = PackageOpenIcon
