import { forwardRef } from "@yamada-ui/core"
import { TvMinimal as TvMinimalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TvMinimalProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TvMinimal = forwardRef<TvMinimalProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TvMinimalIcon} {...props} />
))
