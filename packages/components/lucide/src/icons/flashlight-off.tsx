import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlashlightOff as FlashlightOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlashlightOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlashlightOff = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FlashlightOffIcon} {...props} />,
)
