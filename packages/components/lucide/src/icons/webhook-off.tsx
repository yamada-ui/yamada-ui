import { forwardRef } from "@yamada-ui/core"
import { WebhookOff as WebhookOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WebhookOffProps = LucideIconProps

/**
 * `WebhookOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WebhookOff = forwardRef<WebhookOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WebhookOffIcon} {...props} />
))
