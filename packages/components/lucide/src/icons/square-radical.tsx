import { forwardRef } from "@yamada-ui/core"
import { SquareRadical as SquareRadicalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareRadicalProps = LucideIconProps

/**
 * `SquareRadical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareRadical = forwardRef<SquareRadicalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareRadicalIcon} {...props} />,
)
