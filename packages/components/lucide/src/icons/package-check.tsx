import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PackageCheck as LucidePackageCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PackageCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePackageCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PackageCheckIcon` instead.
 */
export const PackageCheck = PackageCheckIcon
