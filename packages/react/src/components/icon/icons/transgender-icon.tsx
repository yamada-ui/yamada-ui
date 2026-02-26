"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Transgender as OriginalTransgenderIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TransgenderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TransgenderIcon = component(Icon)({
  as: OriginalTransgenderIcon,
}) as Component<"svg", IconProps>
