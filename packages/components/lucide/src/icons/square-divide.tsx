import { forwardRef } from "@yamada-ui/core"
import { SquareDivide as SquareDivideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareDivideProps = LucideIconProps

/**
 * `SquareDivide` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDivide = forwardRef<SquareDivideProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareDivideIcon} {...props} />,
)
