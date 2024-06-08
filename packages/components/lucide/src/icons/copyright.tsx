import { forwardRef } from "@yamada-ui/core"
import { Copyright as CopyrightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CopyrightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Copyright = forwardRef<CopyrightProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CopyrightIcon} {...props} />
))
