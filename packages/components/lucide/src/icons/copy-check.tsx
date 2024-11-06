import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CopyCheck as LucideCopyCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopyCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCopyCheckIcon} {...props} />,
)

/**
 * @deprecated Use `CopyCheckIcon` instead.
 */
export const CopyCheck = CopyCheckIcon
