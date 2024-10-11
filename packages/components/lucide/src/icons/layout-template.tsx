import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LayoutTemplate as LayoutTemplateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LayoutTemplate` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutTemplate = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LayoutTemplateIcon} {...props} />,
)
