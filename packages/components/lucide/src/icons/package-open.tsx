import { forwardRef } from "@yamada-ui/core"
import { PackageOpen as PackageOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PackageOpenProps = LucideIconProps

/**
 * `PackageOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageOpen = forwardRef<PackageOpenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PackageOpenIcon} {...props} />
))
