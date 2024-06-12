import { forwardRef } from "@yamada-ui/core"
import { CircleDashed as CircleDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleDashedProps = LucideIconProps

/**
 * `CircleDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDashed = forwardRef<CircleDashedProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleDashedIcon} {...props} />,
)
