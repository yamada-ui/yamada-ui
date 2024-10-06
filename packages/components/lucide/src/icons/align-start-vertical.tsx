import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignStartVertical as AlignStartVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignStartVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignStartVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={AlignStartVerticalIcon} {...props} />
  ),
)
