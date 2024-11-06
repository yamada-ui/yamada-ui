import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PackagePlus as LucidePackagePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PackagePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackagePlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePackagePlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PackagePlusIcon` instead.
 */
export const PackagePlus = PackagePlusIcon
