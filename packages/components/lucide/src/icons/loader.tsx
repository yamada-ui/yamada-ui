import { forwardRef } from "@yamada-ui/core"
import { Loader as LoaderIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LoaderProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Loader = forwardRef<LoaderProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LoaderIcon} {...props} />
))
