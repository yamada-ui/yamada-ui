import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Microchip as LucideMicrochipIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MicrochipIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicrochipIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMicrochipIcon} {...props} />,
)

/**
 * @deprecated Use `MicrochipIcon` instead.
 */
export const Microchip = MicrochipIcon
