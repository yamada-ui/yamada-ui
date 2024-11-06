import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PackageX as LucidePackageXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PackageXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePackageXIcon} {...props} />
))

/**
 * @deprecated Use `PackageXIcon` instead.
 */
export const PackageX = PackageXIcon
