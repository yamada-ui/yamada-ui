import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PackageX as PackageXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PackageX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageX = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PackageXIcon} {...props} />
))
