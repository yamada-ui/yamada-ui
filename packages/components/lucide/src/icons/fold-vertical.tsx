import { forwardRef } from "@yamada-ui/core"
import { FoldVertical as FoldVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FoldVerticalProps = LucideIconProps

/**
 * `FoldVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FoldVertical = forwardRef<FoldVerticalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FoldVerticalIcon} {...props} />,
)
