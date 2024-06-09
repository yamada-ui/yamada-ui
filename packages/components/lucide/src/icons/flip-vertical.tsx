import { forwardRef } from "@yamada-ui/core"
import { FlipVertical as FlipVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlipVerticalProps = LucideIconProps

/**
 * `FlipVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipVertical = forwardRef<FlipVerticalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FlipVerticalIcon} {...props} />,
)
