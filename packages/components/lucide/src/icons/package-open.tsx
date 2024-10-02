import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PackageOpen as PackageOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PackageOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageOpen = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PackageOpenIcon} {...props} />
))
