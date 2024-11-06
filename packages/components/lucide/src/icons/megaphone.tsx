import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Megaphone as LucideMegaphoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MegaphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MegaphoneIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMegaphoneIcon} {...props} />,
)

/**
 * @deprecated Use `MegaphoneIcon` instead.
 */
export const Megaphone = MegaphoneIcon
