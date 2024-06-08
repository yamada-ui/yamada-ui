import { forwardRef } from "@yamada-ui/core"
import { IndentIncrease as IndentIncreaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type IndentIncreaseProps = LucideIconProps

/**
 * `IndentIncrease` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentIncrease = forwardRef<IndentIncreaseProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={IndentIncreaseIcon} {...props} />,
)
