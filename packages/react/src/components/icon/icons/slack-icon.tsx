"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Slack as OriginalSlackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SlackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SlackIcon = component(Icon)({
  as: OriginalSlackIcon,
}) as Component<"svg", IconProps>
