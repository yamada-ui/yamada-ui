import { forwardRef } from "@yamada-ui/core"
import { SquareArrowLeft as SquareArrowLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowLeftProps = LucideIconProps

/**
 * `SquareArrowLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowLeft = forwardRef<SquareArrowLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareArrowLeftIcon} {...props} />,
)
