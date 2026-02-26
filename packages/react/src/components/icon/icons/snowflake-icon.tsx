"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Snowflake as OriginalSnowflakeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SnowflakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SnowflakeIcon = component(Icon)({
  as: OriginalSnowflakeIcon,
}) as Component<"svg", IconProps>
