import { forwardRef } from "@yamada-ui/core"
import { Box as BoxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BoxProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Box = forwardRef<BoxProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BoxIcon} {...props} />
))
