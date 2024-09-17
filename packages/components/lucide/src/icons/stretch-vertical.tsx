import { forwardRef } from "@yamada-ui/core"
import { StretchVertical as StretchVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `StretchVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StretchVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={StretchVerticalIcon} {...props} />,
)
