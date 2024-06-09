import { forwardRef } from "@yamada-ui/core"
import { LocateFixed as LocateFixedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LocateFixedProps = LucideIconProps

/**
 * `LocateFixed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LocateFixed = forwardRef<LocateFixedProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LocateFixedIcon} {...props} />
))
