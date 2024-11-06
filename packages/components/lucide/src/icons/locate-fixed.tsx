import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LocateFixed as LucideLocateFixedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LocateFixedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LocateFixedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLocateFixedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LocateFixedIcon` instead.
 */
export const LocateFixed = LocateFixedIcon
