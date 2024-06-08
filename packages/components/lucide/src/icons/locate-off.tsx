import { forwardRef } from "@yamada-ui/core"
import { LocateOff as LocateOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LocateOffProps = LucideIconProps

/**
 * `LocateOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LocateOff = forwardRef<LocateOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LocateOffIcon} {...props} />
))
