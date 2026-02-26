"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Logs as OriginalLogsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LogsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LogsIcon = component(Icon)({ as: OriginalLogsIcon }) as Component<
  "svg",
  IconProps
>
