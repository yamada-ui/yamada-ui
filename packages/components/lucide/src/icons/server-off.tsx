import { forwardRef } from "@yamada-ui/core"
import { ServerOff as ServerOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ServerOffProps = LucideIconProps

/**
 * `ServerOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerOff = forwardRef<ServerOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ServerOffIcon} {...props} />
))
