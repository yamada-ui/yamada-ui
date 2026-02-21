"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Webhook as OriginalWebhookIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WebhookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WebhookIcon = component(Icon)({
  as: OriginalWebhookIcon,
}) as Component<"svg", IconProps>
