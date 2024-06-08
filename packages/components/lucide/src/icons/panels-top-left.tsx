import { forwardRef } from "@yamada-ui/core"
import { PanelsTopLeft as PanelsTopLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelsTopLeftProps = LucideIconProps

/**
 * `PanelsTopLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsTopLeft = forwardRef<PanelsTopLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelsTopLeftIcon} {...props} />,
)
