import { forwardRef } from "@yamada-ui/core"
import { Webhook as WebhookIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WebhookProps = LucideIconProps

/**
 * `Webhook` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Webhook = forwardRef<WebhookProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WebhookIcon} {...props} />
))
