import { forwardRef } from "@yamada-ui/core"
import { UnfoldHorizontal as UnfoldHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UnfoldHorizontalProps = LucideIconProps

/**
 * `UnfoldHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnfoldHorizontal = forwardRef<UnfoldHorizontalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UnfoldHorizontalIcon} {...props} />,
)
