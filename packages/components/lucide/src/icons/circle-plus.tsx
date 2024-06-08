import { forwardRef } from "@yamada-ui/core"
import { CirclePlus as CirclePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CirclePlusProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePlus = forwardRef<CirclePlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CirclePlusIcon} {...props} />
))
