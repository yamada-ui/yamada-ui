import { forwardRef } from "@yamada-ui/core"
import { PackageMinus as PackageMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PackageMinusProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageMinus = forwardRef<PackageMinusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PackageMinusIcon} {...props} />,
)
