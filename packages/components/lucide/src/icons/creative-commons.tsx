import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CreativeCommons as CreativeCommonsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CreativeCommons` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CreativeCommons = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CreativeCommonsIcon} {...props} />,
)
