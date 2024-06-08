import { forwardRef } from "@yamada-ui/core"
import { ToyBrick as ToyBrickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ToyBrickProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToyBrick = forwardRef<ToyBrickProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ToyBrickIcon} {...props} />
))
