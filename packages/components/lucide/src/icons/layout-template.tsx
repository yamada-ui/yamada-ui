import { forwardRef } from "@yamada-ui/core"
import { LayoutTemplate as LayoutTemplateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LayoutTemplateProps = LucideIconProps

/**
 * `LayoutTemplate` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutTemplate = forwardRef<LayoutTemplateProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LayoutTemplateIcon} {...props} />,
)
