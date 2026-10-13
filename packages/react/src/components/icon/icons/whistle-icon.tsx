"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Whistle as OriginalWhistleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WhistleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WhistleIcon = component(Icon)({
  as: OriginalWhistleIcon,
}) as Component<"svg", IconProps>
