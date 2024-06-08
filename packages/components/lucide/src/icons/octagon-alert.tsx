import { forwardRef } from "@yamada-ui/core"
import { OctagonAlert as OctagonAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type OctagonAlertProps = LucideIconProps

/**
 * `OctagonAlert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonAlert = forwardRef<OctagonAlertProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={OctagonAlertIcon} {...props} />,
)
