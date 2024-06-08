import { forwardRef } from "@yamada-ui/core"
import { Martini as MartiniIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MartiniProps = LucideIconProps

/**
 * `Martini` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Martini = forwardRef<MartiniProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MartiniIcon} {...props} />
))
