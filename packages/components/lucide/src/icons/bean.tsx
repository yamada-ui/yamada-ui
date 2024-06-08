import { forwardRef } from "@yamada-ui/core"
import { Bean as BeanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BeanProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bean = forwardRef<BeanProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BeanIcon} {...props} />
))
