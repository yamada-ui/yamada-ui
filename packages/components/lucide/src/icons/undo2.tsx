import { forwardRef } from "@yamada-ui/core"
import { Undo2 as Undo2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Undo2Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Undo2 = forwardRef<Undo2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Undo2Icon} {...props} />
))
