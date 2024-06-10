import { forwardRef } from "@yamada-ui/core"
import { FoldHorizontal as FoldHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FoldHorizontalProps = LucideIconProps

/**
 * `FoldHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FoldHorizontal = forwardRef<FoldHorizontalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FoldHorizontalIcon} {...props} />,
)
