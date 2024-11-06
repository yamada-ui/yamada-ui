import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WebhookOff as LucideWebhookOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WebhookOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WebhookOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideWebhookOffIcon} {...props} />,
)

/**
 * @deprecated Use `WebhookOffIcon` instead.
 */
export const WebhookOff = WebhookOffIcon
