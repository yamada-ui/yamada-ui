import { forwardRef } from "@yamada-ui/core"
import { Contrast as ContrastIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ContrastProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Contrast = forwardRef<ContrastProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ContrastIcon} {...props} />
))
