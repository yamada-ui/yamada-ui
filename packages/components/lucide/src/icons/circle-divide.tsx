import { forwardRef } from "@yamada-ui/core"
import { CircleDivide as CircleDivideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleDivideProps = LucideIconProps

/**
 * `CircleDivide` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDivide = forwardRef<CircleDivideProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleDivideIcon} {...props} />,
)
