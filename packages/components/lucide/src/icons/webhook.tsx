import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Webhook as LucideWebhookIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WebhookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WebhookIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWebhookIcon} {...props} />
))

/**
 * @deprecated Use `WebhookIcon` instead.
 */
export const Webhook = WebhookIcon
