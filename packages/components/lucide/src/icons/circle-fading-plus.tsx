import { forwardRef } from "@yamada-ui/core"
import { CircleFadingPlus as CircleFadingPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleFadingPlusProps = LucideIconProps

/**
 * `CircleFadingPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleFadingPlus = forwardRef<CircleFadingPlusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleFadingPlusIcon} {...props} />,
)
