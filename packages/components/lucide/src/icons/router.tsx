import { forwardRef } from "@yamada-ui/core"
import { Router as RouterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RouterProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Router = forwardRef<RouterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RouterIcon} {...props} />
))
