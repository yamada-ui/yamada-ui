import { forwardRef } from "@yamada-ui/core"
import { CopyX as CopyXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CopyXProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyX = forwardRef<CopyXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CopyXIcon} {...props} />
))
