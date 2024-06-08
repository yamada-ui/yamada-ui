import { forwardRef } from "@yamada-ui/core"
import { CircleUserRound as CircleUserRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleUserRoundProps = LucideIconProps

/**
 * `CircleUserRound` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleUserRound = forwardRef<CircleUserRoundProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleUserRoundIcon} {...props} />,
)
