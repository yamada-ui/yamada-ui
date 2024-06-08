import { forwardRef } from "@yamada-ui/core"
import { Triangle as TriangleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TriangleProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Triangle = forwardRef<TriangleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TriangleIcon} {...props} />
))
