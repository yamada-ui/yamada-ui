import { forwardRef } from "@yamada-ui/core"
import { Eraser as EraserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EraserProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Eraser = forwardRef<EraserProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EraserIcon} {...props} />
))
