"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WebhookOff as OriginalWebhookOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WebhookOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WebhookOffIcon = component(Icon)({
  as: OriginalWebhookOffIcon,
}) as Component<"svg", IconProps>
