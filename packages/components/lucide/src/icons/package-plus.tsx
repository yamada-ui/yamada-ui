import { forwardRef } from "@yamada-ui/core"
import { PackagePlus as PackagePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PackagePlusProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackagePlus = forwardRef<PackagePlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PackagePlusIcon} {...props} />
))
