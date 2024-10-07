import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UnfoldVertical as UnfoldVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UnfoldVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnfoldVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UnfoldVerticalIcon} {...props} />,
)
