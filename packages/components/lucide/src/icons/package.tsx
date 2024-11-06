import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Package as LucidePackageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PackageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePackageIcon} {...props} />
))

/**
 * @deprecated Use `PackageIcon` instead.
 */
export const Package = PackageIcon
