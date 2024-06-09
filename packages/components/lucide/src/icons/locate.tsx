import { forwardRef } from "@yamada-ui/core"
import { Locate as LocateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LocateProps = LucideIconProps

/**
 * `Locate` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Locate = forwardRef<LocateProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LocateIcon} {...props} />
))
