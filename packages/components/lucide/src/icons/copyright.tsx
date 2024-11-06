import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Copyright as LucideCopyrightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopyrightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyrightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCopyrightIcon} {...props} />,
)

/**
 * @deprecated Use `CopyrightIcon` instead.
 */
export const Copyright = CopyrightIcon
