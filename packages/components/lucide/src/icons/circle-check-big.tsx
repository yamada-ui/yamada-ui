import { forwardRef } from "@yamada-ui/core"
import { CircleCheckBig as CircleCheckBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleCheckBigProps = LucideIconProps

/**
 * `CircleCheckBig` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleCheckBig = forwardRef<CircleCheckBigProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleCheckBigIcon} {...props} />,
)
