import { forwardRef } from "@yamada-ui/core"
import { CircleDotDashed as CircleDotDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleDotDashedProps = LucideIconProps

/**
 * `CircleDotDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDotDashed = forwardRef<CircleDotDashedProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleDotDashedIcon} {...props} />,
)
