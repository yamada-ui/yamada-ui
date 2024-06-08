import { forwardRef } from "@yamada-ui/core"
import { Server as ServerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ServerProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Server = forwardRef<ServerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ServerIcon} {...props} />
))
