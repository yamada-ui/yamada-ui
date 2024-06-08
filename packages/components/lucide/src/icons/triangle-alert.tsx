import { forwardRef } from "@yamada-ui/core"
import { TriangleAlert as TriangleAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TriangleAlertProps = LucideIconProps

/**
 * `TriangleAlert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TriangleAlert = forwardRef<TriangleAlertProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TriangleAlertIcon} {...props} />,
)
