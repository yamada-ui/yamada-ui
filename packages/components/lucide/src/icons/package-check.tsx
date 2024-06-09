import { forwardRef } from "@yamada-ui/core"
import { PackageCheck as PackageCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PackageCheckProps = LucideIconProps

/**
 * `PackageCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageCheck = forwardRef<PackageCheckProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PackageCheckIcon} {...props} />,
)
