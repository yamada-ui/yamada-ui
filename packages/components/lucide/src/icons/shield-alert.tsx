import { forwardRef } from "@yamada-ui/core"
import { ShieldAlert as ShieldAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldAlertProps = LucideIconProps

/**
 * `ShieldAlert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldAlert = forwardRef<ShieldAlertProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShieldAlertIcon} {...props} />
))
