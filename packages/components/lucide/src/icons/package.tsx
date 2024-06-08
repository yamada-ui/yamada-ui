import { forwardRef } from "@yamada-ui/core"
import { Package as PackageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PackageProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Package = forwardRef<PackageProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PackageIcon} {...props} />
))
