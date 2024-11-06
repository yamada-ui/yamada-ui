import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PilcrowLeft as LucidePilcrowLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PilcrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePilcrowLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PilcrowLeftIcon` instead.
 */
export const PilcrowLeft = PilcrowLeftIcon
